const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        const imagenBase64 = event.body.imagen; // La foto que manda la app
        const bufferImagen = Buffer.from(imagenBase64, 'base64');

        // 1. Marina le pide a AWS Rekognition que busque el rostro
        const params = {
            CollectionId: "CondoConnect_Rostros_Globales",
            Image: { Bytes: bufferImagen },
            FaceMatchThreshold: 95.0, // Exigimos 95% de similitud para máxima seguridad
            MaxFaces: 1
        };

        const resultadoBusqueda = await rekognition.searchFacesByImage(params).promise();

        if (resultadoBusqueda.FaceMatches.length > 0) {
            const faceId = resultadoBusqueda.FaceMatches[0].Face.FaceId;

            // 2. Buscar a quién le pertenece ese rostro en DynamoDB
            const usuario = await dynamoDB.get({
                TableName: 'Personal_Seguridad_Operativa',
                Key: { Vector_Biometrico_Facial: faceId }
            }).promise();

            return {
                statusCode: 200,
                body: JSON.stringify({
                    acceso: true,
                    mensaje: `Identidad confirmada. Bienvenido, ${usuario.Item.Nombre_Completo}`,
                    rol: usuario.Item.Rol
                })
            };
        } else {
            return {
                statusCode: 403,
                body: JSON.stringify({ acceso: false, mensaje: "Rostro no reconocido en el Padrón Biométrico." })
            };
        }
    } catch (error) {
        console.error("Error en la neurona biométrica:", error);
        return { statusCode: 500, body: JSON.stringify({ mensaje: "Error interno de Marina AI" }) };
    }
};