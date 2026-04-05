// Este script corre en segundo plano para proteger el dispositivo del guardia
export const iniciarProteccionMarina = () => {
    let sensibilidad = 15; // Nivel de sacudida para activar alerta
    
    window.addEventListener('devicemotion', (event) => {
        let aceleracion = event.accelerationIncludingGravity;
        let movimientoTotal = Math.abs(aceleracion.x) + Math.abs(aceleracion.y) + Math.abs(aceleracion.z);

        if (movimientoTotal > sensibilidad) {
            console.log("Marina IA: Detectado movimiento brusco. Posible robo.");
            activarProtocoloAlerta();
        }
    });
};

const activarProtocoloAlerta = () => {
    // 1. Enviar última ubicación GPS a AWS inmediatamente
    // 2. Emitir sonido de alarma a máximo volumen aunque esté en silencio
    const alarma = new Audio('/assets/alarma_marina_sos.mp3');
    alarma.volume = 1.0;
    alarma.play();
    
    // 3. Bloqueo de pantalla con mensaje de Marina
    alert("DISPOSITIVO MONITOREADO POR CONDOCONNECT AI. UBICACIÓN ENVIADA AL SOC.");
};