import React, { useEffect, useRef, useState } from 'react';

export default function LoginCaseta({ onLogin }) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState('Inicializando cámara frontal...');

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStatus('Cámara activa. Por favor, mire fijamente al lente.');
        }
      })
      .catch(err => setStatus('Error: No se detectó cámara web. Acceso denegado.'));
  }, []);

  const simularEscaneoAWS = () => {
    setStatus('Analizando nodos faciales vía AWS Rekognition...');
    setTimeout(() => {
      // BYPASS DE PRUEBA: Te identificamos y te damos acceso directo como ADMINISTRADOR
      setStatus('Identidad Confirmada: Víctor Hugo. Asignando credenciales de Administrador Multicondominio...');
      setTimeout(() => {
        const stream = videoRef.current.srcObject;
        if (stream) stream.getTracks().forEach(track => track.stop());
        onLogin('Admin');
      }, 2000);
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#020408', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#00E5FF', margin: '0', fontFamily: 'Orbitron, sans-serif' }}>CondoConnect AI</h1>
        <p style={{ color: '#8892B0' }}>Punto de Control Biométrico ISO-27001</p>
      </div>

      <div style={{ background: '#0A1628', padding: '20px', borderRadius: '15px', border: '1px solid #00E5FF', boxShadow: '0 0 30px rgba(0, 229, 255, 0.1)', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: '300px', height: '300px', margin: '0 auto', borderRadius: '50%', overflow: 'hidden', border: '4px solid #00E5FF', boxShadow: '0 0 20px #00E5FF' }}>
          <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}></video>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0, 229, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.2) 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: 10, opacity: 0.5 }}></div>
        </div>
        <p style={{ marginTop: '20px', color: '#00FF88', fontSize: '14px', fontFamily: 'monospace', maxWidth: '350px' }}>{status}</p>
        <button onClick={simularEscaneoAWS} style={{ marginTop: '20px', padding: '12px 25px', background: 'transparent', border: '2px solid #00E5FF', color: '#00E5FF', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', transition: 'all 0.3s' }}>
          INICIAR ESCANEO FACIAL
        </button>
      </div>
    </div>
  );
}
