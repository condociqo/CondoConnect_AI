const Hikvision = require('./driver_hikvision_lpr');
const JohnsonControls = require('./driver_johnson_controls');
const Bosch = require('./driver_bosch_ams');
const HotelLocks = require('./driver_hoteleria_rfid');

// Marina AI llama a esta función universal
async function procesarAccesoFisico(cliente, tipoAcceso) {
  
  if (cliente.vertical === 'Condominio') {
    const hardware = new Hikvision(cliente.ip_caseta, 'admin', 'password123');
    await hardware.abrirPluma('Pluma_Visitantes_1');
  
  } else if (cliente.vertical === 'Corporativo') {
    const hardware = new JohnsonControls('https://api.ccure.local', 'token999');
    await hardware.concederAccesoTorniquete('EMP-405', 'Nivel_Ejecutivo');
  
  } else if (cliente.vertical === 'Hotel') {
    const hardware = new HotelLocks();
    await hardware.generarLlaveDigital('Habitacion_402', '2026-04-05', '2026-04-10');
  }
}