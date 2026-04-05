// Script para el microcontrolador en la caseta (Ej. Node.js en Raspberry Pi)
const awsIot = require('aws-iot-device-sdk');
// Simulamos una librería que controla los pines eléctricos (GPIO)
const pinesElectricos = require('simulador-gpio'); 

// Configuramos los relevadores (los interruptores físicos de las puertas)
const releBarreraVehicular = pinesElectricos.setup(17, 'SALIDA');
const relePuertaPeatonal = pinesElectricos.setup(27, 'SALIDA');

console.log("♾️ Iniciando Enlace Físico CondoConnect...");

// Conexión segura con los servidores de AWS de Víctor
const dispositivoCaseta = awsIot.device({
  keyPath: './certs/private.pem.key',
  certPath: './certs/certificate.pem.crt',
  caPath: './certs/AmazonRootCA1.pem',
  clientId: 'Caseta_Principal_Zafiro',
  host: 'tu-endpoint-aws-iot.amazonaws.com'
});

dispositivoCaseta.on('connect', function() {
  console.log('✅ Conectado a AWS IoT Core. Marina tiene control total.');
  
  // Nos suscribimos al "canal" de comunicación de Marina para escuchar órdenes
  dispositivoCaseta.subscribe('condoconnect/caseta1/puertas');
});

// Cuando Marina o el Guardia envían la orden desde el celular:
dispositivoCaseta.on('message', function(canal, ordenCodificada) {
  const orden = JSON.parse(ordenCodificada.toString());
  
  console.log(`Mensaje recibido de Marina: ABRIR ${orden.puerta}`);

  if (orden.puerta === 'VEHICULAR') {
    abrirPuerta(releBarreraVehicular);
  } else if (orden.puerta === 'PEATONAL') {
    abrirPuerta(relePuertaPeatonal);
  }
});

// Función que envía el pulso eléctrico para abrir
function abrirPuerta(relevador) {
  console.log("⚡ Enviando pulso eléctrico al motor...");
  relevador.encender(); // Activa el imán/motor
  
  // Mantiene el pulso por 2 segundos y luego lo apaga (como un botón)
  setTimeout(() => {
    relevador.apagar();
    console.log("🔒 Puerta asegurada nuevamente.");
  }, 2000);
}