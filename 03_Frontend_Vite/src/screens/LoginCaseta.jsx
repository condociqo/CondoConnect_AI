import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function LoginCaseta({ onLogin }) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState('Inicializando cámara frontal...');
  const [camaraFallo, setCamaraFallo] = useState(false);
  
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStatus('Cámara activa. Listo para escaneo o ingreso manual.');
        }
      })
      .catch(err => {
        setStatus('Cámara en uso o bloqueada. Proceda con credenciales manuales.');
        setCamaraFallo(true);
      });
  }, []);

  const handleRealLogin = async (e) => {
    e?.preventDefault();
    setStatus('Autenticando en Cognito...');
    try {
      const { isSignedIn } = await signIn(email, password);
      if (isSignedIn) {
        setStatus('Token JWT recibido. Desbloqueando...');
        setTimeout(() => {
          const stream = videoRef.current?.srcObject;
          if (stream) stream.getTracks().forEach(track => track.stop());
          if (onLogin) onLogin(); 
        }, 1000);
      }
    } catch (error) {
      setStatus(Acceso Denegado:  + error.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#020408', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#00E5FF', margin: '0', fontFamily: 'Orbitron, sans-serif' }}>CondoConnect AI</h1>
        <p style={{ color: '#8892B0' }}>Punto de Control Cognito ISO-27001</p>
      </div>

      <div style={{ background: '#0A1628', padding: '30px', borderRadius: '15px', border: '1px solid #00E5FF', boxShadow: '0 0 30px rgba(0, 229, 255, 0.1)', textAlign: 'center', maxWidth: '400px' }}>
        <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #00E5FF', background: '#000' }}>
          {!camaraFallo ? (
             <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}></video>
          ) : (
             <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%', color:'#ef4444', fontSize:'40px'}}>📷❌</div>
          )}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0, 229, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.2) 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: 10, opacity: 0.5 }}></div>
        </div>
        
        <p style={{ color: status.includes('Denegado') ? '#ef4444' : '#00FF88', fontSize: '12px', fontFamily: 'monospace', marginBottom: '20px', minHeight: '35px' }}>{status}</p>
        
        <form onSubmit={handleRealLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="email" placeholder="Usuario CIQO / Email" value={email} onChange={e => setEmail(e.target.value)} style={{ padding: '10px', borderRadius: '5px', background: '#020408', border: '1px solid #334155', color: 'white' }} required />
          <input type="password" placeholder="Cifrado Biométrico / Password" value={password} onChange={e => setPassword(e.target.value)} style={{ padding: '10px', borderRadius: '5px', background: '#020408', border: '1px solid #334155', color: 'white' }} required />
          <button type="submit" style={{ marginTop: '10px', padding: '12px', background: '#00E5FF', color: '#0A1628', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
            AUTENTICAR EN NÚCLEO AWS
          </button>
        </form>
      </div>
    </div>
  );
}
