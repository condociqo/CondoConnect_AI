// Driver para Módulos de Acceso Hikvision (Barreras y LPR)
const axios = require('axios');

class HikvisionDriver {
  constructor(ip, usuario, password) {
    this.baseUrl = `http://${ip}/ISAPI/AccessControl/`;
    this.auth = { username: usuario, password: password };
  }

  async abrirPluma(puertaId) {
    console.log(`📡 Enviando comando a Hikvision para abrir pluma ${puertaId}...`);
    // Código de integración ISAPI de Hikvision
    try {
      await axios.put(`${this.baseUrl}RemoteControl/door/${puertaId}`, 
        { cmd: "open" }, { auth: this.auth });
      return { success: true, hardware: 'Hikvision' };
    } catch (error) {
      console.error("Error en hardware Hikvision:", error);
      return { success: false };
    }
  }
}
module.exports = HikvisionDriver;