import React, { useState } from 'react';

export default function SincronizadorSistemasLegacy() {
  const [conexion, setConexion] = useState({
    propiedad: 'Torre Zafiro',
    sistemaCliente: 'Vivook',
    estado: 'Desconectado',
    apiKey: ''
  });

  const [sincronizando, setSincronizando] = useState(false);

  const conectarSistema = (e) => {
    e.preventDefault();
    if (!conexion.apiKey) return alert('Se requiere la llave API proporcionada por la administración del condominio.');

    setSincronizando(true);
    
    // Simulamos la conexión segura de Marina con el sistema de la competencia
    setTimeout(() => {
      setSincronizando(false);
      setConexion({ ...conexion, estado: 'Conectado_Activo' });
    }, 3000);
  };

  return (
    <div style={estilos.contenedorPuente}>
      <header style={estilos.headerPuente}>
        <h3 style={estilos.titulo}>🌉 Puente de Integración (Operación Caballo de Troya)</h3>
        <p style={estilos.subtitulo}>El guardia opera en CondoConnect AI. Nosotros enviamos los reportes al sistema viejo del cliente.</p>
      </header>

      <div style={estilos.gridPanel}>
        {/* Configuración del Puente */}
        <div style={estilos.tarjetaModulo}>
          <h4 style={estilos.tituloSeccion}>Conectar Propiedad a Sistema de Terceros</h4>
          
          {conexion.estado === 'Desconectado' ? (
            <form onSubmit={conectarSistema} style={estilos.formulario}>
              <label style={estilos.etiqueta}>Software que usa la Administración:</label>
              <select 
                value={conexion.sistemaCliente} 
                onChange={e => setConexion({...conexion, sistemaCliente: e.target.value})}
                style={estilos.input}
              >
                <option value="Vivook">Vivook</option>
                <option value="Resident">Resident</option>
                <option value="ComunidadFeliz">ComunidadFeliz</option>
                <option value="Custom">Otro (Vía Webhook)</option>
              </select>

              <label style={estilos.etiqueta}>API Key del Sistema Cliente:</label>
              <input 
                type="password" 
                placeholder="Pídele esta llave al Administrador del edificio..." 
                value={conexion.apiKey}
                onChange={e => setConexion({...conexion, apiKey: e.target.value})}
                style={estilos.input} 
              />

              <button type="submit" disabled={sincronizando} style={estilos.botonConectar}>
                {sincronizando ? '♾️ Marina negociando conexión segura...' : '🔗 Establecer Puente de Datos'}
              </button>
            </form>
          ) : (
            <div style={estilos.estadoActivo}>
              <h2 style={{margin: '0 0 10px 0'}}>🟢 Puente Activo</h2>
              <p>Los guardias de <strong>{conexion.propiedad}</strong> están usando CondoConnect AI.</p>
              <p style={estilos.textoInfo}>Marina AI está enviando copias de las bitácoras y registros de visitas a <strong>{conexion.sistemaCliente}</strong> en tiempo real.</p>
              <button onClick={() => setConexion({...conexion, estado: 'Desconectado', apiKey: ''})} style={estilos.botonDesconectar}>Romper Puente (Desconectar)</button>
            </div>
          )}
        </div>

        {/* Panel de Ventajas del Guardia */}
        <div style={estilos.tarjetaVentajas}>
          <h4 style={{ color: 'white', marginTop: 0 }}>¿Qué herramientas gana el guardia al usar CondoConnect de forma independiente?</h4>
          <ul style={estilos.listaVentajas}>
            <li>✔️ <strong>CondoChat Seguro:</strong> Habla con su supervisor sin usar WhatsApp personal.</li>
            <li>✔️ <strong>Nómina y Adelantos:</strong> Su dinero gestionado por Marina, no por el edificio.</li>
            <li>✔️ <strong>Botón SOS Táctico:</strong> Conexión directa a la patrulla de su empresa.</li>
            <li>✔️ <strong>Escaneo IA Inmediato:</strong> Cero filas en caseta, Marina lee las identificaciones en 1 segundo.</li>
          </ul>
          <p style={{ fontSize: '12px', color: '#94A3B8', fontStyle: 'italic', marginTop: '20px' }}>
            * Estrategia Comercial: Cuando el Administrador vea lo rápido que trabajan los guardias con CondoConnect, terminarán cancelando el otro software para pasarse 100% con nosotros.
          </p>
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorPuente: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif' },
  headerPuente: { borderBottom: '2px solid #E2E8F0', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '13px', margin: '5px 0 0 0' },
  gridPanel: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  tarjetaModulo: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  tituloSeccion: { margin: '0 0 15px 0', color: '#1E293B' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '15px' },
  etiqueta: { fontSize: '13px', fontWeight: 'bold', color: '#475569' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #94A3B8' },
  botonConectar: { backgroundColor: '#8B5CF6', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  estadoActivo: { backgroundColor: '#F0FDF4', border: '2px solid #10B981', padding: '20px', borderRadius: '8px', textAlign: 'center', color: '#065F46' },
  textoInfo: { fontSize: '13px', color: '#047857', marginBottom: '20px' },
  botonDesconectar: { backgroundColor: '#EF4444', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' },
  tarjetaVentajas: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '8px', border: '1px solid #334155', color: '#E2E8F0' },
  listaVentajas: { listStyleType: 'none', padding: 0, lineHeight: '2.5', fontSize: '14px' }
};