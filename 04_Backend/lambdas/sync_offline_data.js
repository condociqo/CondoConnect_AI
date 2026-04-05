const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        // La app nos manda un "paquete" con todo lo que pasó mientras no había internet
        const paqueteOffline = JSON.parse(event.body);
        const { idPropiedad, bitacorasPendientes, accesosPendientes } = paqueteOffline;

        console.log(`♾️ Sincronizando ${accesosPendientes.length} registros offline para la propiedad ${idPropiedad}`);

        // Procesamiento en Lote (BatchWrite) para guardar todo rápido en DynamoDB
        const promesasGuardado = [];

        for (const registro of accesosPendientes) {
            const parametros = {
                TableName: 'CondoConnect_Bitacora_Accesos',
                Item: {
                    ID_Acceso: registro.idUnico,
                    ID_Propiedad: idPropiedad,
                    FechaHoraOriginal: registro.fechaHora, // La hora en que realmente pasó
                    DatosVisitante: registro.datos,
                    ModoRegistro: 'Offline_Sync'
                }
            };
            promesasGuardado.push(dynamoDB.put(parametros).promise());
        }

        // Esperamos a que todo se guarde en la base de datos
        await Promise.all(promesasGuardado);

        return {
            statusCode: 200,
            body: JSON.stringify({
                mensaje: "Sincronización exitosa. Base de datos central actualizada.",
                registrosSincronizados: accesosPendientes.length
            })
        };

    } catch (error) {
        console.error("Error en sincronización offline:", error);
        return { statusCode: 500, body: JSON.stringify({ mensaje: "Fallo en la sincronización de datos diferidos." }) };
    }
};