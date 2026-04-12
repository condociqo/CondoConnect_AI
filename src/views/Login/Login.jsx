import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulación de validación del Creador
    if (email === 'tecnicovictorhugo@condoconnectai.com') {
      console.log('Acceso concedido al Administrador');
      navigate('/portal');
    } else {
      alert('Credenciales no autorizadas');
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#00f2ff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'monospace' }}>
      <form onSubmit={handleLogin} style={{ border: '2px solid #00f2ff', padding: '40px', borderRadius: '15px', boxShadow: '0 0 20px #00f2ff' }}>
        <h2 style={{ textAlign: 'center' }}>🔐 ACCESO CONDO-CONNECT</h2>
        <div style={{ marginBottom: '20px' }}>
          <label>USUARIO:</label><br/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', background: '#111', color: '#fff', border: '1px solid #00f2ff' }} required />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>CONTRASEÑA:</label><br/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', background: '#111', color: '#fff', border: '1px solid #00f2ff' }} required />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#00f2ff', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
          INICIAR SESIÓN
        </button>
      </form>
    </div>
  );
};

export default Login;
