const axios = require('axios'); // Librería para hacer llamadas a otros softwares
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        // 1. Recibimos los datos desde la caseta (Ej. El guardia busca un folio)
        const { idPropiedad, sistemaExterno, folioBusqueda } = JSON.parse(event.body);

        console.log(`♾️ Marina buscando el folio ${folioBusqueda} en el sistema: ${sistemaExterno}`);

        // 2. Marina busca en su bóveda la "Llave Secreta" para entrar a ese software en específico
        const configIntegracion = await dynamoDB.get({
            TableName: 'CondoConnect_Configuraciones_API',
            Key: { ID_Propiedad: idPropiedad }
        }).promise();

        if (!configIntegracion.Item || !configIntegracion.Item.Credenciales[sistemaExterno]) {
            return { statusCode: 403, body: JSON.stringify({ error: "El cliente no ha activado la conexión con este software." }) };
        }

        const urlExterna = configIntegracion.Item.Credenciales[sistemaExterno].URL_Endpoint;
        const tokenSecreto = configIntegracion.Item.Credenciales[sistemaExterno].API_Key;

        // 3. Marina hace la llamada (Habla con el "Mesero" del otro software)
        // Ejemplo: https://api.hotel-software.com/v1/reservations/FOLIO-123
        const respuestaExterna = await axios.get(`${urlExterna}/${folioBusqueda}`, {
            headers: {
                'Authorization': `Bearer ${tokenSecreto}`, // Entregamos el gafete
                'Content-Type': 'application/json'
            },
            timeout: 5000 // Si el otro software tarda más de 5 segundos, abortamos para no bloquear la caseta
        });

        // 4. Analizamos la respuesta
        const datosDelOtroSoftware = respuestaExterna.data;

        if (datosDelOtroSoftware.estatus === 'Activo' || datosDelOtroSoftware.status === 'CheckedIn') {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    acceso: true,
                    mensaje: `Validado por ${sistemaExterno}.`,
                    datosExtraidos: datosDelOtroSoftware // Le pasamos el nombre y datos al guardia
                })
            };
        } else {
            return {
                statusCode: 401,
                body: JSON.stringify({ acceso: false, mensaje: "El software externo indica que el folio no es válido o expiró." })
            };
        }

    } catch (error) {
        console.error("Fallo al contactar sistema externo:", error.message);
        
        // Manejo de errores profesional: Si el otro software se cayó, se lo decimos al guardia
        return { 
            statusCode: 502, // 502 Bad Gateway (Culpa del otro sistema, no nuestra)
            body: JSON.stringify({ 
                error: "El sistema del cliente no responde.", 
                solucion: "Proceder con validación manual por radio." 
            }) 
        };
    }
};