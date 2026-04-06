// Driver de Integración API Kantech EntraPass (Johnson Controls)
export const KantechAPI = {
  // Simulación de prueba hacia la IP proporcionada
  probarConexion: async (ip, port, username, password) => {
    console.log(Intentando handshake con Kantech EntraPass en: https:// + ip + : + port);
    
    // En un entorno real, aquí haríamos un fetch() a la API RESTful de Kantech
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 'success',
          version: 'EntraPass Global Edition 8.40',
          message: 'Handshake exitoso. Token de sesión generado.'
        });
      }, 1500);
    });
  },

  obtenerPuertas: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 'K-01', nombre: 'Pluma Acceso Principal (KT-400)', estado: 'Cerrada' },
          { id: 'K-02', nombre: 'Lector Lobby (KT-1)', estado: 'Cerrada' }
        ]);
      }, 1000);
    });
  },

  abrirPuerta: async (puertaId) => {
    console.log(Enviando comando de relevador a Kantech para puerta:  + puertaId);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: 'success', message: 'Comando ejecutado. Relé activado (3 segundos).' });
      }, 800);
    });
  }
};
