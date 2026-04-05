const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        const { idPaquete, idGuardia, idEmpresa, plataformaLogistica } = JSON.parse(event.body);

        // 1. Definimos la comisión base (esto puede venir de una tabla de configuración)
        const comisionTotal = 10.00; 
        const reparto = {
            guardia: comisionTotal * 0.40, // $4.00
            plataforma: comisionTotal * 0.30, // $3.00 (Para Víctor)
            empresa: comisionTotal * 0.30 // $3.00
        };

        const fechaAccion = new Date().toISOString();

        // 2. Puente de Pago: Actualizamos la "Billetera" del Guardia en DynamoDB
        const operacionGuardia = dynamoDB.update({
            TableName: 'CondoConnect_Carteras_Personal',
            Key: { ID_Elemento: idGuardia },
            UpdateExpression: "set Saldo_Acumulado = Saldo_Acumulado + :val, Ultimo_Escaneo = :fecha",
            ExpressionAttributeValues: {
                ":val": reparto.guardia,
                ":fecha": fechaAccion
            }
        }).promise();

        // 3. Puente de Pago: Tu ganancia (SaaS Global)
        const operacionAdmin = dynamoDB.update({
            TableName: 'CondoConnect_Finanzas_Globales',
            Key: { ID_SaaS: 'MASTER_REVENUE' },
            UpdateExpression: "set Saldo_Logistica = Saldo_Logistica + :val",
            ExpressionAttributeValues: { ":val": reparto.plataforma }
        }).promise();

        await Promise.all([operacionGuardia, operacionAdmin]);

        return {
            statusCode: 200,
            body: JSON.stringify({
                mensaje: "Monetización exitosa",
                gananciaGuardia: `$${reparto.guardia} MXN abonados`
            })
        };

    } catch (error) {
        console.error("Error en dispersión de fondos:", error);
        return { statusCode: 500, body: JSON.stringify({ error: "Fallo en el puente financiero." }) };
    }
};