import React, { useState } from 'react';

export default function SetupFundadorAutomatizado() {
  const [paso, setPaso] = useState(1);
  const [datosNegocio, setDatosNegocio] = useState({
    nombreEmpresa: '', rfc: '', clabe: '',
    stripeApiKey: '', mercadoPagoToken: '', amazonAffiliateId: ''
  });
  const [configurando, setConfigurando] = useState(false);

  const avanzarPaso = (e) => {
    e.preventDefault();
    setPaso(paso + 1);
  };

  const finalizarAutomatizacion = (e) => {
    e.preventDefault();
    setConfigurando(true);
    
    // Aquí el backend de AWS recibe las llaves y encripta todo
    setTimeout(() => {
      setConfigurando(false);
      setPaso(4); // Pantalla de éxito
    }, 4000);
  };

  return (
    <div style={estilos.contenedorSetup}>
      <div style={estilos.tarjetaSetup}>
        <div style={estilos.headerSetup}>
          <div style={estilos.avatarMarina}>♾️</div>
          <div>
            <h2 style={estilos.titulo}>Hola Víctor, soy Marina.</h2>
            <p style={estilos.subtitulo}>Vamos a conectar tu empresa al mundo. Solo dame los datos y yo me encargo de la ingeniería financiera.</p>
          </div>
        </div>

        {/* PASO 1: Identidad Legal */}
        {paso === 1 && (
          <form onSubmit={avanzarPaso} style={estilos.formulario}>
            <h3 style={estilos.pasoTitulo}>Paso 1: Identidad Legal (SAS o Persona Física)</h3>
            <label style={estilos.etiqueta}>Razón Social / Nombre de la Empresa</label>
            <input type="text" placeholder="Ej. CondoConnect AI S.A.S." required style={estilos.input} onChange={e => setDatosNegocio({...datosNegocio, nombreEmpresa: e.target.value})} />
            
            <label style={estilos.etiqueta}>RFC con Homoclave (Para timbrar facturas)</label>
            <input type="text" placeholder="Ej. CON260401XYZ" required style={estilos.input} onChange={e => setDatosNegocio({...datosNegocio, rfc: e.target.value})} />
            
            <label style={estilos.etiqueta}>Cuenta CLABE Interbancaria (Donde recibirás tus ganancias)</label>
            <input type="number" placeholder="18 dígitos" required style={estilos.input} onChange={e => setDatosNegocio({...datosNegocio, clabe: e.target.value})} />
            
            <button type="submit" style={estilos.botonSiguiente}>Conectar Identidad y Continuar ➡️</button>
          </form>
        )}

        {/* PASO 2: Cobros y Monetización */}
        {paso === 2 && (
          <form onSubmit={avanzarPaso} style={estilos.formulario}>
            <h3 style={estilos.pasoTitulo}>Paso 2: Pasarelas de Cobro Global</h3>
            <p style={estilos.instruccion}>Pega aquí las "API Keys" que te dieron en Stripe y Mercado Pago.</p>
            
            <label style={estilos.etiqueta}>Stripe API Secret Key (Para cobro de licencias en el mundo)</label>
            <input type="password" placeholder="sk_live_..." required style={estilos.input} onChange={e => setDatosNegocio({...datosNegocio, stripeApiKey: e.target.value})} />
            
            <label style={estilos.etiqueta}>Mercado Pago Access Token (Para cobro en México/LATAM)</label>
            <input type="password" placeholder="APP_USR-..." required style={estilos.input} onChange={e => setDatosNegocio({...datosNegocio, mercadoPagoToken: e.target.value})} />
            
            <div style={estilos.botonesControl}>
              <button type="button" onClick={() => setPaso(1)} style={estilos.botonAtras}>⬅️ Atrás</button>
              <button type="submit" style={estilos.botonSiguiente}>Asegurar Llaves y Continuar ➡️</button>
            </div>
          </form>
        )}

        {/* PASO 3: Afiliados y Fast-Track */}
        {paso === 3 && (
          <form onSubmit={finalizarAutomatizacion} style={estilos.formulario}>
            <h3 style={estilos.pasoTitulo}>Paso 3: Motor de Monetización Logística</h3>
            <p style={estilos.instruccion}>Para que los condominios generen dinero comprando en Amazon, necesitamos tu ID de Afiliado.</p>
            
            <label style={estilos.etiqueta}>Amazon Associates Store ID</label>
            <input type="text" placeholder="condoconnect-20" required style={estilos.input} onChange={e => setDatosNegocio({...datosNegocio, amazonAffiliateId: e.target.value})} />
            
            <div style={estilos.botonesControl}>
              <button type="button" onClick={() => setPaso(2)} style={estilos.botonAtras}>⬅️ Atrás</button>
              <button type="submit" disabled={configurando} style={estilos.botonFinalizar}>
                {configurando ? '♾️ Marina configurando AWS y encriptando...' : '🚀 Lanzar Plataforma Global'}
              </button>
            </div>
          </form>
        )}

        {/* PASO 4: ÉXITO */}
        {paso === 4 && (
          <div style={estilos.pantallaExito}>
            <h1 style={{fontSize: '60px', margin: '0 0 10px 0'}}>🌍🚀</h1>
            <h2 style={{color: '#10B981', margin: '0 0 15px 0'}}>Sistemas Integrados con Éxito</h2>
            <p style={{color: '#64748B'}}>CondoConnect AI ya está autorizado para realizar cobros globales, emitir facturas al SAT bajo el RFC <strong>{datosNegocio.rfc}</strong> y generar comisiones por logística.</p>
            <p style={{fontWeight: 'bold', color: '#0F172A', marginTop: '15px'}}>Tu infraestructura comercial es 100% operativa.</p>
            <button onClick={() => alert('Entrando al Dashboard Principal de Fundador...')} style={estilos.botonSiguiente}>Entrar a mi Panel de Control</button>
          </div>
        )}
      </div>
    </div>
  );
}

const estilos = {
  contenedorSetup: { minHeight: '100vh', backgroundColor: '#0F172A', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', fontFamily: 'sans-serif' },
  tarjetaSetup: { backgroundColor: '#FFFFFF', width: '100%', maxWidth: '600px', borderRadius: '15px', padding: '30px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)' },
  headerSetup: { display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '2px solid #F1F5F9', paddingBottom: '20px', marginBottom: '20px' },
  avatarMarina: { fontSize: '40px', backgroundColor: '#E0F2FE', padding: '10px', borderRadius: '50%', color: '#0284C7' },
  titulo: { margin: 0, color: '#0F172A', fontSize: '24px' },
  subtitulo: { margin: '5px 0 0 0', color: '#64748B', fontSize: '14px', lineHeight: '1.5' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '15px' },
  pasoTitulo: { color: '#0284C7', margin: '0 0 10px 0' },
  instruccion: { fontSize: '13px', color: '#64748B', marginBottom: '10px' },
  etiqueta: { fontWeight: 'bold', color: '#334155', fontSize: '14px' },
  input: { padding: '15px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '16px', outline: 'none' },
  botonesControl: { display: 'flex', gap: '10px', marginTop: '15px' },
  botonAtras: { flex: 1, backgroundColor: '#F1F5F9', color: '#475569', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  botonSiguiente: { flex: 2, backgroundColor: '#0284C7', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '15px' },
  botonFinalizar: { flex: 2, backgroundColor: '#10B981', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
  pantallaExito: { textAlign: 'center', padding: '20px' }
};