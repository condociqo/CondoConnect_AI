const AWS = require('aws-sdk');
const crypto = require('crypto');
// Configurar tu región
AWS.config.update({ region: 'us-east-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();
const kms = new AWS.KMS();

async function verifyLog(eventId, kmsKeyId) {
    try {
        console.log(\Auditando evento: \...\);
        const result = await dynamodb.get({ TableName: 'CondoConnect_Bitacora', Key: { event_id: eventId } }).promise();
        
        if (!result.Item) throw new Error("Evento no encontrado");
        
        const item = result.Item;
        
        // 1. Recalcular Hash
        const recalculatedHash = crypto.createHash('sha256').update(item.payload).digest('hex');
        if (recalculatedHash !== item.hash) {
            console.error("❌ INVALID: El payload fue alterado. El Hash no coincide.");
            return;
        }

        // 2. Verificar Firma KMS
        const verifyParams = {
            KeyId: kmsKeyId,
            Message: Buffer.from(item.hash),
            MessageType: 'RAW',
            Signature: Buffer.from(item.signature, 'base64'),
            SigningAlgorithm: 'RSASSA_PKCS1_V1_5_SHA_256'
        };

        const isVerified = await kms.verify(verifyParams).promise();
        
        if (isVerified.SignatureValid) {
            console.log("✅ VALID: Sello criptográfico intacto. El registro es auténtico e inmutable.");
        } else {
            console.error("❌ INVALID: La firma digital fue corrompida.");
        }
    } catch (e) {
        console.error("❌ ERROR DURANTE AUDITORÍA:", e.message);
    }
}

// Ejecución: node verify-log-integrity.js <EVENT_ID> <KMS_KEY_ID>
const args = process.argv.slice(2);
if(args.length === 2) verifyLog(args[0], args[1]);
else console.log("Uso: node verify-log-integrity.js <event_id> <kms_key_id>");
