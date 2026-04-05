const AWS = require('aws-sdk');
const iotData = new AWS.IotData({ endpoint: 'tu-endpoint-aws.iot.com' });

exports.handler = async (event) => {
    const { idPropiedad, puerta, accion, usuarioSolicitante } = event.body;

    console.log(`Marina AI autorizando acción: ${accion} en ${puerta} por ${usuarioSolicitante}`);

    // Crear el mensaje que entenderá el hardware de la caseta
    const payloadHardware = {
        puerta: puerta, // Ej: "VEHICULAR" o "PEATONAL"
        comando: accion, // Ej: "ABRIR"
        timestamp: Date.now()
    };

    const params = {
        topic: `condoconnect/${idPropiedad}/puertas`, // El canal MQTT de la caseta
        payload: JSON.stringify(payloadHardware),
        qos: 1
    };

    try {
        // Disparar la orden a los motores físicos
        await iotData.publish(params).promise();
        
        // Registrar en la Bitácora de Accesos de DynamoDB
        // (Código de escritura en base de datos aquí...)

        return { statusCode: 200, body: JSON.stringify({ mensaje: "Pulso eléctrico enviado. Puerta abriendo." }) };
    } catch (error) {
        console.error("Error de conexión IoT:", error);
        return { statusCode: 500, body: JSON.stringify({ mensaje: "Fallo de comunicación con el hardware de la caseta." }) };
    }
};