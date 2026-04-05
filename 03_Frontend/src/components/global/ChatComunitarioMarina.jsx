import React, { useState } from 'react';

export default function ChatComunitarioMarina() {
  const [grupoActivo, setGrupoActivo] = useState('Caseta Principal');
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState([
    { id: 1, autor: 'Marina AI', texto: 'Iniciando bitácora del turno nocturno. Todos los sistemas en línea.', hora: '20:00', tipo: 'sistema' },
    { id: 2, autor: 'Antonio (Supervisor)', texto: 'Enterado. Comenzando rondín en perímetro norte.', hora: '20:05', tipo: 'usuario' }
  ]);

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    // Se agrega el mensaje al instante a la pantalla
    setMensajes([...mensajes, { id: Date.now(), autor: 'Tú', texto: mensaje, hora: 'Ahora', tipo: 'propio' }]);
    setMensaje('');

    // Si alguien escribe una alerta, Marina interviene
    if (mensaje.toLowerCase().includes('sos') || mensaje.toLowerCase().includes('emergencia')) {
      setTimeout(() => {
        setMensajes(prev => [...prev, { 
          id: Date.now() + 1, 
          autor: 'Marina AI', 
          texto: '🚨 ALERTA DETECTADA: Activando cámaras de la zona y notificando al gerente operativo.', 
          hora: 'Ahora', 
          tipo: 'alerta' 
        }]);
      }, 1000);
    }
  };

  return (
    <div style={estilos.contenedorChat}>
      {/* Panel Lateral: Lista de Grupos y Comunidades */}
      <div style={estilos.panelLateral}>
        <h3 style={estilos.tituloLateral}>💬 CondoChat</h3>
        
        <h4 style={estilos.categoriaMenu}>🔴 Grupos Operativos</h4>
        <ul style={estilos.listaGrupos}>
          <li style={estilos.itemGrupoActivo}>🛡️ Caseta Principal</li>
          <li style={estilos.itemGrupo}>🧹 Mantenimiento y Limpieza</li>
          <li style={estilos.itemGrupo}>👔 Administración</li>
        </ul>

        <h4 style={estilos.categoriaMenu}>🏢 Comunidades</h4>
        <ul style={estilos.listaGrupos}>
          <li style={estilos.itemGrupo}>📢 Avisos a Residentes (Solo Lectura)</li>
          <li style={estilos.itemGrupo}>🤝 Foro de Vecinos Torre A</li>
        </ul>

        <button style={estilos.botonNuevoGrupo}>+ Nuevo Grupo</button>
      </div>

      {/* Panel Principal: Conversación */}
      <div style={estilos.panelConversacion}>
        <div style={estilos.headerChat}>
          <h3 style={{ margin: 0, color: '#0F172A' }}>{grupoActivo}</h3>
          <span style={{ fontSize: '12px', color: '#10B981' }}>🔒 Encriptación Zero Trust Activa</span>
        </div>

        <div style={estilos.areaMensajes}>
          {mensajes.map(msg => (
            <div key={msg.id} style={
              msg.tipo === 'propio' ? estilos.burbujaPropia : 
              msg.tipo === 'sistema' ? estilos.burbujaSistema :
              msg.tipo === 'alerta' ? estilos.burbujaAlerta : estilos.burbujaUsuario
            }>
              <div style={estilos.autorMensaje}>{msg.autor} <span style={estilos.horaMensaje}>{msg.hora}</span></div>
              <div>{msg.texto}</div>
            </div>
          ))}
        </div>

        <form onSubmit={enviarMensaje} style={estilos.areaEscritura}>
          <button type="button" style={estilos.botonAdjuntar}>📎 Adjuntar Evidencia</button>
          <input 
            type="text" 
            value={mensaje} 
            onChange={(e) => setMensaje(e.target.value)} 
            placeholder="Escribe un mensaje o reporte..." 
            style={estilos.inputMensaje} 
          />
          <button type="submit" style={estilos.botonEnviar}>Enviar ➡️</button>
        </form>
      </div>
    </div>
  );
}

const estilos = {
  contenedorChat: { display: 'flex', height: '80vh', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif', overflow: 'hidden' },
  panelLateral: { width: '300px', backgroundColor: '#0F172A', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column' },
  tituloLateral: { margin: '0 0 20px 0', color: '#38BDF8' },
  categoriaMenu: { fontSize: '12px', color: '#64748B', textTransform: 'uppercase', marginBottom: '10px', marginTop: '20px' },
  listaGrupos: { listStyle: 'none', padding: 0, margin: 0 },
  itemGrupo: { padding: '10px', cursor: 'pointer', borderRadius: '6px', color: '#CBD5E1', marginBottom: '5px' },
  itemGrupoActivo: { padding: '10px', cursor: 'pointer', borderRadius: '6px', backgroundColor: '#1E293B', color: 'white', fontWeight: 'bold', marginBottom: '5px', borderLeft: '3px solid #38BDF8' },
  botonNuevoGrupo: { marginTop: 'auto', padding: '12px', backgroundColor: 'transparent', color: '#38BDF8', border: '1px dashed #38BDF8', borderRadius: '6px', cursor: 'pointer' },
  
  panelConversacion: { flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'white' },
  headerChat: { padding: '15px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F1F5F9' },
  areaMensajes: { flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' },
  
  burbujaUsuario: { alignSelf: 'flex-start', backgroundColor: '#F1F5F9', padding: '12px 15px', borderRadius: '0px 15px 15px 15px', maxWidth: '70%', border: '1px solid #E2E8F0' },
  burbujaPropia: { alignSelf: 'flex-end', backgroundColor: '#DBEAFE', padding: '12px 15px', borderRadius: '15px 0px 15px 15px', maxWidth: '70%', border: '1px solid #BFDBFE' },
  burbujaSistema: { alignSelf: 'center', backgroundColor: '#F0FDF4', color: '#166534', padding: '8px 15px', borderRadius: '20px', fontSize: '13px', textAlign: 'center', border: '1px solid #BBF7D0' },
  burbujaAlerta: { alignSelf: 'center', backgroundColor: '#FEF2F2', color: '#991B1B', padding: '10px 15px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', textAlign: 'center', border: '1px solid #FECACA', animation: 'pulse 2s infinite' },
  
  autorMensaje: { fontSize: '11px', fontWeight: 'bold', color: '#64748B', marginBottom: '5px', display: 'flex', justifyContent: 'space-between' },
  horaMensaje: { fontWeight: 'normal', color: '#94A3B8' },
  
  areaEscritura: { padding: '15px', borderTop: '1px solid #E2E8F0', display: 'flex', gap: '10px', backgroundColor: '#F8FAFC' },
  botonAdjuntar: { padding: '12px', backgroundColor: '#E2E8F0', color: '#475569', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  inputMensaje: { flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #CBD5E1', outline: 'none' },
  botonEnviar: { padding: '12px 20px', backgroundColor: '#0284C7', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }
};