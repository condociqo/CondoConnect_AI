import React, { useState } from 'react';

export default function LoginCaseta() {
  const [metodoAcceso, setMetodoAcceso] = useState('biometria'); // biometria o credenciales

  return (
    <div style={estilos.contenedorLogin}>
      {/* Video de fondo del universo (Representando el infinito) */}
      <video autoPlay loop muted style={estilos.videoFondo}>
        <source src="/assets/universo_infinito_fondo.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Capa oscura para que resalte el texto y el logo */}
      <div style={estilos.capaSuperpuesta}></div>

      <div style={estilos.tarjetaLogin}>
        {/* Logo de CondoConnect AI con el Infinito */}
        <div style={estilos.contenedorLogo}>
          <img src="/assets/1000410830.png" alt="CondoConnect AI Logo" style={estilos.logo} />
        </div>
        
        <h1 style={estilos.titulo}>CONDOCONNECT AI</h1>
        <h2 style={estilos.subtitulo}>Dignidad Infinita</h2>

        <div style={estilos.areaControles}>
          {metodoAcceso === 'biometria' ? (
            <div style={estilos.panelBiometrico}>
              <div style={estilos.escanerFacial}>
                <div style={estilos.lineaEscaneo}></div>
                <p style={estilos.textoEscaner}>Alinea tu rostro para iniciar turno</p>
              </div>
              <button style={estilos.botonPrimario}>
                Ingresar con Biometría (AWS Rekognition)
              </button>
              <button onClick={() => setMetodoAcceso('credenciales')} style={estilos.botonSecundario}>
                Usar usuario y contraseña
              </button>
            </div>
          ) : (
            <div style={estilos.panelCredenciales}>
              <input type="text" placeholder="Usuario (Ej. CC-CONDO-DEPTO)" style={estilos.input} />
              <input type="password" placeholder="Contraseña segura" style={estilos.input} />
              <button style={estilos.botonPrimario}>
                Iniciar Sesión
              </button>
              <button onClick={() => setMetodoAcceso('biometria')} style={estilos.botonSecundario}>
                Volver a Biometría
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorLogin: { position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' },
  videoFondo: { position: 'absolute', top: '50%', left: '50%', minWidth: '100%', minHeight: '100%', width: 'auto', height: 'auto', transform: 'translate(-50%, -50%)', zIndex: 1, objectFit: 'cover' },
  capaSuperpuesta: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(11, 25, 44, 0.75)', zIndex: 2 }, // Azul marino metálico oscuro con transparencia
  tarjetaLogin: { position: 'relative', zIndex: 3, backgroundColor: 'rgba(15, 23, 42, 0.85)', padding: '40px 20px', borderRadius: '15px', width: '90%', maxWidth: '400px', textAlign: 'center', border: '1px solid #38BDF8', boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' },
  contenedorLogo: { width: '120px', margin: '0 auto 15px auto' },
  logo: { width: '100%', height: 'auto', dropShadow: '0 0 10px #38BDF8' },
  titulo: { color: '#FFFFFF', fontSize: '24px', margin: '0 0 5px 0', letterSpacing: '2px' },
  subtitulo: { color: '#38BDF8', fontSize: '16px', margin: '0 0 30px 0', fontStyle: 'italic' },
  areaControles: { width: '100%' },
  panelBiometrico: { display: 'flex', flexDirection: 'column', gap: '15px' },
  panelCredenciales: { display: 'flex', flexDirection: 'column', gap: '15px' },
  escanerFacial: { height: '150px', border: '2px dashed #38BDF8', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.5)' },
  lineaEscaneo: { position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', backgroundColor: '#38BDF8', boxShadow: '0 0 10px #38BDF8', animation: 'scan 3s infinite' },
  textoEscaner: { color: '#94A3B8', fontSize: '14px' },
  input: { padding: '15px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: 'rgba(30, 41, 59, 0.8)', color: 'white', fontSize: '16px' },
  botonPrimario: { backgroundColor: '#0284C7', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' },
  botonSecundario: { backgroundColor: 'transparent', color: '#BAE6FD', padding: '10px', borderRadius: '8px', border: '1px solid #0284C7', fontSize: '14px', cursor: 'pointer' }
};