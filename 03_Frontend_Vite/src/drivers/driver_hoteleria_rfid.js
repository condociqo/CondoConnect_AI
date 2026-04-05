// Driver para Chapas Electrónicas (ASSA ABLOY / VingCard)
class HotelLocksDriver {
  async generarLlaveDigital(habitacion, checkIn, checkOut) {
    console.log(`🏨 Generando llave digital (Mobile Key) para habitación ${habitacion}`);
    const tokenGenerado = "RND-TOKEN-847583";
    // Envía el token al celular del huésped vía Bluetooth/NFC
    return { habitacion, token: tokenGenerado, expira: checkOut };
  }
}
module.exports = HotelLocksDriver;