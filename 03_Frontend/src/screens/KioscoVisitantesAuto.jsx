import React, { useState } from 'react';

export default function KioscoVisitantesAuto() {
  const [paso, setPaso] = useState('inicio'); // inicio, escaneo, contactando, acceso_concedido
  const [datosVisita, setDatosVisita] = useState('');

  const simularEscaneoInivitacion = () => {
    setPaso('contactando');
    // Simula que Marina valida el QR en AWS y contacta al residente
    setTimeout(() => {
      setPaso('acceso_concedido');
    }, 3000);
  };

  return (
    <div style={estilos.pantallaKiosco}>
      <div style={estilos.avatarMarina}>
        <img src="/assets/Marina_AI_Guia_Avatar_v1.png" alt="Marina" style={estilos.imgAvatar} />
      </div>

      <div style={estilos.tarjetaInteraccion}>
        {paso === 'inicio' && (
          <>
            <h2 style={estilos.saludoMarina}>Hola, soy Marina ♾️</h2>
            <p style={estilos.avisoGuardia}>El oficial de seguridad está en una pausa reglamentaria. Yo te ayudaré con tu acceso.</p>
            
            <div style={estilos.opcionesIngreso}>
              <button onClick={() => setPaso('escaneo')} style={estilos.botonKioscoPrimario}>
                📱 Escanear mi Invitación QR
              </button>
              <button style={estilos.botonKioscoSecundario}>
                📞 Llamar al Departamento
              </button>
              <button style={estilos.botonKioscoDelivery}>
                📦 Soy Repartidor / Delivery
              </button>
            </div>
          </>
        )}

        {paso === 'escaneo' && (
          <div style={estilos.zonaEscaneo}>
            <h3>Muestra tu código QR a la cámara</h3>
            <div style={estilos.camaraKiosco}>
              {/* Aquí iría el componente real de la cámara web/móvil */}
              <div style={estilos.lineaLectura}></div>
            </div>
            <button onClick={simularEscaneoInivitacion} style={estilos.botonSimular}>[Simular Lectura Exitosa]</button>
            <button onClick={() => setPaso('inicio')} style={estilos.botonRegresar}>Cancelar</button>
          </div>
        )}

        {paso === 'contactando' && (
          <div style={estilos.zonaProceso}>
            <div style={estilos.loaderOndas}></div>
            <h3 style={estilos.textoProceso}>Validando invitación y notificando al residente...</h3>
            <p>Por favor, espera un momento en la línea de acceso.</p>
          </div>
        )}

        {paso === 'acceso_concedido' && (
          <div style={estilos.zonaExito}>
            <h1 style={estilos.checkGigante}>✅</h1>
            <h2 style={estilos.textoAcceso}>Acceso Autorizado</h2>
            <p style={estilos.instruccionFinal}>Bienvenido. La barrera peatonal/vehicular se está abriendo. Dirígete al Departamento 402.</p>
            <button onClick={() => setPaso('inicio')} style={estilos.botonFinalizar}>Siguiente Visitante</button>
          </div>
        )}
      </div>
    </div>
  );
}

const estilos = {
  pantallaKiosco: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#020617', padding: '20px', fontFamily: 'sans-serif' },
  avatarMarina: { width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #00E5FF', marginBottom: '20px', boxShadow: '0 0 30px rgba(0, 229, 255, 0.4)' },
  imgAvatar: { width: '100%', height: '100%', objectFit: 'cover' },
  tarjetaInteraccion: { backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: '40px', borderRadius: '20px', width: '100%', maxWidth: '500px', textAlign: 'center', border: '1px solid #1E293B', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' },
  saludoMarina: { color: '#00E5FF', fontSize: '28px', margin: '0 0 10px 0' },
  avisoGuardia: { color: '#94A3B8', fontSize: '16px', marginBottom: '30px', lineHeight: '1.5' },
  opcionesIngreso: { display: 'flex', flexDirection: 'column', gap: '15px' },
  botonKioscoPrimario: { backgroundColor: '#00E5FF', color: '#0F172A', padding: '20px', borderRadius: '12px', border: 'none', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s' },
  botonKioscoSecundario: { backgroundColor: 'transparent', color: '#00E5FF', padding: '20px', borderRadius: '12px', border: '2px solid #00E5FF', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' },
  botonKioscoDelivery: { backgroundColor: '#F59E0B', color: 'white', padding: '20px', borderRadius: '12px', border: 'none', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  zonaEscaneo: { color: 'white' },
  camaraKiosco: { width: '100%', height: '250px', backgroundColor: '#000', borderRadius: '12px', position: 'relative', overflow: 'hidden', margin: '20px 0', border: '2px dashed #00E5FF' },
  lineaLectura: { width: '100%', height: '3px', backgroundColor: '#00E5FF', position: 'absolute', top: '50%', boxShadow: '0 0 15px #00E5FF', animation: 'scan 2s infinite' },
  botonSimular: { backgroundColor: '#334155', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', marginBottom: '10px', width: '100%' },
  botonRegresar: { backgroundColor: 'transparent', color: '#94A3B8', padding: '10px', border: 'none', textDecoration: 'underline', cursor: 'pointer' },
  zonaProceso: { color: '#00E5FF' },
  loaderOndas: { width: '50px', height: '50px', border: '5px solid #0F172A', borderTop: '5px solid #00E5FF', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px auto' },
  textoProceso: { color: 'white', marginBottom: '10px' },
  zonaExito: { color: 'white' },
  checkGigante: { fontSize: '70px', margin: '0 0 10px 0', color: '#10B981' },
  textoAcceso: { color: '#10B981', fontSize: '28px', margin: '0 0 15px 0' },
  instruccionFinal: { color: '#E2E8F0', fontSize: '18px', marginBottom: '30px' },
  botonFinalizar: { backgroundColor: '#10B981', color: 'white', padding: '15px', borderRadius: '12px', border: 'none', width: '100%', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }
};