import React, { useState } from 'react';

export default function ConfiguracionRolesGlobalesApp() {
  const [perfilAEditar, setPerfilAEditar] = useState('Residente - Perfil Corporativo (Oficinas)');

  return (
    <div style={estilos.contenedorBuilder}>
      <h3 style={estilos.titulo}>⚙️ App Builder & Roles Multiglobales</h3>
      <p style={estilos.subtitulo}>Personaliza la experiencia de la App Móvil según la propiedad y el perfil del usuario.</p>

      <div style={estilos.panelSeleccion}>
        <label style={estilos.etiqueta}>Seleccionar Perfil / Rol para modificar su App:</label>
        <select value={perfilAEditar} onChange={(e) => setPerfilAEditar(e.target.value)} style={estilos.select}>
          <option>Residente - Perfil Residencial Horizontal</option>
          <option>Residente - Perfil Corporativo (Oficinas)</option>
          <option>Guardia - Caseta Control Vehicular</option>
          <option>Guardia - Recepción Lobby</option>
        </select>
      </div>

      <div style={estilos.gridModulos}>
        <div style={estilos.tarjetaModulo}>
          <h4>📱 Módulos de la App (Encender/Apagar)</h4>
          
          <div style={estilos.filaToggle}>
            <span>Bóveda Digital de Documentos</span>
            <input type="checkbox" defaultChecked style={estilos.toggle} />
          </div>
          <div style={estilos.filaToggle}>
            <span>Pasarela de Pagos (Stripe/PayPal)</span>
            <input type="checkbox" defaultChecked style={estilos.toggle} />
          </div>
          <div style={estilos.filaToggle}>
            <span>Cine Comunitario / Amazon Prime</span>
            <input type="checkbox" style={estilos.toggle} /> {/* Apagado por defecto para oficinas */}
          </div>
          <div style={estilos.filaToggle}>
            <span>Reserva de Amenidades (Salas Juntas)</span>
            <input type="checkbox" defaultChecked style={estilos.toggle} />
          </div>
          <div style={estilos.filaToggle}>
            <span>Botón SOS Pánico (Marina AI)</span>
            <input type="checkbox" defaultChecked style={estilos.toggle} />
          </div>
        </div>

        <div style={estilos.vistaPreviaApp}>
          <div style={estilos.mockupCelular}>
            <h5 style={{margin: '0 0 10px 0', color: '#38BDF8'}}>Vista Previa: {perfilAEditar}</h5>
            <div style={estilos.mockupBoton}>📁 Mis Documentos</div>
            <div style={estilos.mockupBoton}>💳 Pagar Mantenimiento</div>
            <div style={estilos.mockupBoton}>📅 Reservar Sala de Juntas</div>
            <div style={estilos.mockupBotonAlerta}>🚨 SOS</div>
          </div>
        </div>
      </div>
      
      <button style={estilos.botonGuardar}>🚀 Desplegar Cambios a los Teléfonos en Tiempo Real</button>
    </div>
  );
}

const estilos = {
  contenedorBuilder: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', marginTop: '20px', fontFamily: 'sans-serif' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '14px', margin: '5px 0 20px 0' },
  panelSeleccion: { marginBottom: '20px', padding: '15px', backgroundColor: '#E2E8F0', borderRadius: '8px' },
  etiqueta: { fontWeight: 'bold', color: '#1E293B', marginRight: '10px' },
  select: { padding: '10px', borderRadius: '5px', border: '1px solid #94A3B8', fontSize: '16px', width: '300px' },
  gridModulos: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' },
  tarjetaModulo: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #CBD5E1' },
  filaToggle: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #F1F5F9', color: '#1E293B', fontWeight: '500' },
  toggle: { width: '20px', height: '20px', cursor: 'pointer' },
  vistaPreviaApp: { display: 'flex', justifyContent: 'center' },
  mockupCelular: { width: '220px', height: '400px', backgroundColor: '#0F172A', borderRadius: '30px', border: '8px solid #334155', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' },
  mockupBoton: { backgroundColor: '#1E293B', color: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center', fontSize: '12px', border: '1px solid #475569' },
  mockupBotonAlerta: { backgroundColor: '#7F1D1D', color: '#FCA5A5', padding: '15px', borderRadius: '8px', textAlign: 'center', fontSize: '12px', border: '1px solid #EF4444', marginTop: 'auto' },
  botonGuardar: { width: '100%', padding: '15px', backgroundColor: '#10B981', color: 'white', border: 'none', borderRadius: '8px', marginTop: '20px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }
};