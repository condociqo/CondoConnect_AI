const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Esta función es un "Pre Token Generation Trigger" de AWS Cognito
exports.handler = async (event) => {
    try {
        const idUsuario = event.userName;
        const idPropiedad = event.request.userAttributes['custom:id_propiedad'];
        const rolUsuario = event.request.userAttributes['custom:rol'];

        // 1. Si es el dueño (Tú, Víctor) o un guardia operativo, SIEMPRE entran.
        // No le podemos bloquear el sistema al guardia porque se compromete la seguridad.
        if (rolUsuario === 'SuperAdminSaaS' || rolUsuario === 'Guardia') {
            return event; // Pase libre
        }

        // 2. Si es Administrador o Residente, verificamos que el Condominio haya pagado
        const estadoSuscripcion = await dynamoDB.get({
            TableName: 'CondoConnect_Licencias_SaaS',
            Key: { ID_Propiedad: idPropiedad }
        }).promise();

        const estatus = estadoSuscripcion.Item.Estatus_Pago; // Puede ser "Al_Corriente" o "Moroso"

        // 3. Evaluar el Estatus Financiero
        if (estatus === 'Moroso') {
            // El condominio no ha pagado la renta de CondoConnect AI
            console.log(`Acceso denegado a ${idUsuario}. La propiedad ${idPropiedad} tiene adeudos.`);
            
            // Le inyectamos una etiqueta roja a su gafete digital
            event.response = {
                claimsOverrideDetails: {
                    claimsToAddOrOverride: {
                        'custom:bloqueo_financiero': 'ACTIVADO',
                        'custom:mensaje_bloqueo': 'Su propiedad presenta un adeudo en la licencia de CondoConnect AI.'
                    }
                }
            };
        } else {
            // Todo en orden, la licencia está pagada
            event.response = {
                claimsOverrideDetails: {
                    claimsToAddOrOverride: {
                        'custom:bloqueo_financiero': 'LIBRE'
                    }
                }
            };
        }

        // Devolvemos el control a AWS Cognito para que lo deje entrar o lo mande a pagar
        return event;

    } catch (error) {
        console.error("Error validando el pago de la licencia:", error);
        throw new Error("Error interno al verificar la suscripción.");
    }
};