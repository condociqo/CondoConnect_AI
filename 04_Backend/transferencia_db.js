// Script para subir datos locales a AWS DynamoDB
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' }); // Tu región de AWS

const dynamodb = new AWS.DynamoDB.DocumentClient();

const datosLocales = [
  { PK: "PARQUE_IND_01", SK: "GUARDIA_ANTONIO_R", rol: "Tactico", saldo: 456.00 },
  { PK: "PARQUE_IND_01", SK: "CONFIG_HARDWARE", pluma: "Hikvision_LPR", ip: "192.168.1.100" }
];

async function migrarANube() {
  console.log("🚀 Iniciando transferencia a la nube de AWS...");
  
  for (let dato of datosLocales) {
    const parametros = {
      TableName: "Tabla_Operaciones_CondoConnect",
      Item: dato
    };
    await dynamodb.put(parametros).promise();
    console.log(`✅ Dato migrado: ${dato.SK}`);
  }
  
  console.log("🛡️ Transferencia completada. Datos asegurados en DynamoDB.");
}

migrarANube();