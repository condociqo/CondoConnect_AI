import React, { useEffect, useRef, useState } from 'react';

export default function LoginCaseta({ onLogin }) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState('Inicializando cámara frontal...');
  const [camaraFallo, setCamaraFallo] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStatus('Cámara activa. Por favor, mire fijamente al lente.');
        }
      })
      .catch(err => {
        setStatus('Error de hardware: Cámara web bloqueada o en uso.');
        setCamaraFallo(true);
      });
  }, []);

  const simularEscaneoAWS = (rolDestino) => {
    setStatus('Analizando nodos faciales...');
    setTimeout(() => {
      setStatus('Identidad Confirmada. Desbloqueando...');
      setTimeout(() => {
        const stream = videoRef.current?.srcObject;
        if (stream) stream.getTracks().forEach(track => track.stop());
        onLogin(rolDestino);
      }, 1000);
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: '#020408', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#00E5FF', margin: '0', fontFamily: 'Orbitron, sans-serif' }}>CondoConnect AI</h1>
        <p style={{ color: '#8892B0' }}>Punto de Control Biométrico ISO-27001</p>
      </div>

      <div style={{ background: '#0A1628', padding: '30px', borderRadius: '15px', border: '1px solid #00E5FF', boxShadow: '0 0 30px rgba(0, 229, 255, 0.1)', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: '250px', height: '250px', margin: '0 auto', borderRadius: '50%', overflow: 'hidden', border: '4px solid #00E5FF', background: '#000' }}>
          {!camaraFallo ? (
             <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}></video>
          ) : (
             <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%', color:'#ef4444', fontSize:'40px'}}>📷❌</div>
          )}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0, 229, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.2) 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: 10, opacity: 0.5 }}></div>
        </div>
        
        <p style={{ marginTop: '20px', color: camaraFallo ? '#ef4444' : '#00FF88', fontSize: '14px', fontFamily: 'monospace' }}>{status}</p>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
          <button onClick={() => simularEscaneoAWS('Admin')} style={{ padding: '10px 15px', background: 'transparent', border: '2px solid #00E5FF', color: '#00E5FF', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            Acceder como ADMINISTRADOR
          </button>
          <button onClick={() => simularEscaneoAWS('Guardia')} style={{ padding: '10px 15px', background: 'transparent', border: '2px solid #8b5cf6', color: '#8b5cf6', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            Acceder como GUARDIA
          </button>
        </div>
      </div>
    </div>
  );
}
