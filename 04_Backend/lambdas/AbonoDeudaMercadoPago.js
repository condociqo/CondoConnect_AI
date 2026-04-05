// Neurona de Gestión de Deuda - Marina AI
exports.handler = async (event) => {
    const { idGuardia, montoEscaneo, tieneDeudaML } = JSON.parse(event.body);

    // Definimos el porcentaje sugerido para pago de deuda (ej. 50%)
    const porcentajeAbono = 0.50; 
    let abonoDeuda = 0;
    let saldoLibre = montoEscaneo;

    if (tieneDeudaML) {
        abonoDeuda = montoEscaneo * porcentajeAbono;
        saldoLibre = montoEscaneo - abonoDeuda;

        // Marina envía el pago directo a la API de Cobranza de Mercado Pago
        // Esto recupera la cartera vencida para ML automáticamente
        await pagarDeudaML(idGuardia, abonoDeuda); 
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            mensaje: tieneDeudaML ? "Abono a tu deuda realizado con éxito." : "Ganancia depositada.",
            detalle: `Abonado a deuda: $${abonoDeuda} | Disponible: $${saldoLibre}`
        })
    };
};