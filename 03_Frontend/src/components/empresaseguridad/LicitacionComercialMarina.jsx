import React, { useState } from 'react';

export default function LicitacionComercialMarina() {
  const [fase, setFase] = useState('dashboard');
  const [datosLicitacion, setDatosLicitacion] = useState({ cliente: 'Corporativo Santa Fe', elementos: 4 });

  const generarPropuesta = (e) => {
    e.preventDefault();
    setFase('generada');
  };

  return (
    <div style={estilos.contenedorComercial}>
      <header style={estilos.headerComercial}>
        <h3 style={estilos.titulo}>🤝 Cierre de Contratos y Licitaciones B2B</h3>
        <p style={estilos.subtitulo}>Gana servicios demostrando el poder de CondoConnect AI.</p>
      </header>

      {fase === 'dashboard' ? (
        <form onSubmit={generarPropuesta} style={estilos.formulario}>
          <h4 style={{color: '#1E293B', marginBottom: '15px'}}>Nueva Propuesta Comercial</h4>
          <input type="text" placeholder="Nombre de la Propiedad / Cliente Prospecto" style={estilos.input} onChange={e => setDatosLicitacion({...datosLicitacion, cliente: e.target.value})} required />
          <input type="number" placeholder="Cantidad de Elementos Solicitados" style={estilos.input} onChange={e => setDatosLicitacion({...datosLicitacion, elementos: e.target.value})} required />
          
          <div style={estilos.diferenciadores}>
            <p><strong>Incluir Diferenciadores en la Propuesta:</strong></p>
            <label><input type="checkbox" checked readOnly /> Transparencia Total (Cero Cobros Ocultos)</label><br/>
            <label><input type="checkbox" checked readOnly /> Cero Rotación (Bienestar y Pago Inmediato a Guardias)</label><br/>
            <label><input type="checkbox" checked readOnly /> Acceso a Bóveda Legal y Marina AI</label>
          </div>

          <button type="submit" style={estilos.botonGenerar}>🪄 Generar Pitch y Enlace de Demostración</button>
        </form>
      ) : (
        <div style={estilos.panelPropuesta}>
          <h1 style={{fontSize: '50px', margin: 0}}>🏆</h1>
          <h2 style={estilos.textoExito}>Propuesta Digital Creada</h2>
          <p>El cliente <strong>{datosLicitacion.cliente}</strong> recibirá un enlace único.</p>
          
          <div style={estilos.cajaDemo}>
            <p style={{margin: 0, fontWeight: 'bold'}}>Enlace para el Cliente:</p>
            <a href="#" style={estilos.enlace}>https://condoconnect.com/demo/{datosLicitacion.cliente.replace(/\s+/g, '').toLowerCase()}</a>
            <p style={estilos.notaDemo}>Al abrirlo, Marina AI le dará la bienvenida y le explicará cómo auditaremos su seguridad, ahorrándole dinero y dignificando al personal.</p>
          </div>

          <button onClick={() => setFase('dashboard')} style={estilos.botonVolver}>Preparar otra licitación</button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorComercial: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif', marginTop: '20px' },
  headerComercial: { borderBottom: '2px solid #F1F5F9', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#3B82F6', fontSize: '14px', margin: '5px 0 0 0', fontWeight: 'bold' },
  formulario: { backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #94A3B8' },
  diferenciadores: { backgroundColor: '#EFF6FF', padding: '15px', borderRadius: '6px', marginBottom: '20px', fontSize: '14px', lineHeight: '1.8' },
  botonGenerar: { backgroundColor: '#10B981', color: 'white', border: 'none', padding: '15px', width: '100%', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
  panelPropuesta: { textAlign: 'center', backgroundColor: '#F0FDF4', padding: '30px', borderRadius: '8px', border: '1px solid #10B981' },
  textoExito: { color: '#065F46', margin: '15px 0' },
  cajaDemo: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px dashed #10B981', margin: '20px 0', textAlign: 'left' },
  enlace: { color: '#3B82F6', wordBreak: 'break-all', fontSize: '16px', display: 'block', margin: '10px 0' },
  notaDemo: { fontSize: '13px', color: '#64748B' },
  botonVolver: { backgroundColor: '#0F172A', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }
};