import React, { useState } from 'react';

export default function GestorAmenidadesCine() {
  const [amenidades, setAmenidades] = useState([
    { nombre: 'Salón de Eventos VIP', capacidad: 50, deposito: '$2,000 MXN', estado: 'Activo' },
    { nombre: 'Roof Garden / Asadores', capacidad: 20, deposito: '$500 MXN', estado: 'Activo' }
  ]);

  const [eventoCine, setEventoCine] = useState({ pelicula: 'Interstellar', fecha: 'Viernes 20:00 hrs', confirmados: 18 });

  const notificarCine = () => {
    alert(`🍿 Marina ha enviado una notificación Push y WhatsApp a toda la comunidad invitándolos al Cine Comunitario: ${eventoCine.pelicula}.`);
  };

  return (
    <div style={estilos.contenedorAm}>
      <div style={estilos.headerAm}>
        <h3 style={estilos.titulo}>🌴 Creación de Amenidades y Comunidad</h3>
        <button style={estilos.botonNuevaAm}>+ Alta de Amenidad</button>
      </div>

      <div style={estilos.gridCine}>
        {/* Gestor Clásico de Amenidades */}
        <div style={estilos.panelLista}>
          <h4 style={estilos.subtitulo}>Catálogo de Instalaciones</h4>
          {amenidades.map((am, index) => (
            <div key={index} style={estilos.tarjetaAm}>
              <div>
                <p style={estilos.nombreAm}><strong>{am.nombre}</strong></p>
                <p style={estilos.detalleAm}>Capacidad: {am.capacidad} | Depósito: {am.deposito}</p>
              </div>
              <button style={estilos.botonEditar}>✏️ Reglas</button>
            </div>
          ))}
        </div>

        {/* Módulo Especial: Cine Comunitario / Prime Video */}
        <div style={estilos.panelCine}>
          <div style={estilos.bannerPrime}>
            <h4 style={estilos.tituloCine}>🎬 Cine Comunitario (Prime Video Hub)</h4>
          </div>
          <p style={estilos.textoCine}>Fomenta la convivencia. Programa proyecciones en el auditorio o Watch Parties virtuales.</p>
          
          <div style={estilos.cartelera}>
            <p><strong>Próxima Función:</strong> {eventoCine.pelicula}</p>
            <p><strong>Horario:</strong> {eventoCine.fecha}</p>
            <p><strong>Residentes Confirmados:</strong> {eventoCine.confirmados} personas</p>
            
            <div style={estilos.controlesCine}>
              <button onClick={notificarCine} style={estilos.botonInvitar}>📣 Enviar Invitación Masiva</button>
              <button style={estilos.botonPrime}>Conectar a Amazon Prime 📺</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorAm: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', marginTop: '20px', fontFamily: 'sans-serif' },
  headerAm: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #E2E8F0', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  botonNuevaAm: { backgroundColor: '#10B981', color: 'white', padding: '10px 15px', borderRadius: '6px', border: 'none', fontWeight: 'bold', cursor: 'pointer' },
  gridCine: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  panelLista: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #CBD5E1' },
  subtitulo: { color: '#475569', margin: '0 0 15px 0' },
  tarjetaAm: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #E2E8F0', borderRadius: '6px', marginBottom: '10px', backgroundColor: '#F1F5F9' },
  nombreAm: { margin: '0 0 5px 0', color: '#1E293B', fontSize: '16px' },
  detalleAm: { margin: 0, color: '#64748B', fontSize: '12px' },
  botonEditar: { backgroundColor: '#0F172A', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' },
  panelCine: { backgroundColor: '#0F172A', color: 'white', padding: '20px', borderRadius: '8px', border: '2px solid #00A8E1', boxShadow: '0 5px 15px rgba(0, 168, 225, 0.2)' },
  bannerPrime: { backgroundColor: '#00A8E1', padding: '10px', borderRadius: '5px', textAlign: 'center', marginBottom: '15px' },
  tituloCine: { margin: 0, color: 'white', fontSize: '18px' },
  textoCine: { color: '#94A3B8', fontSize: '14px', marginBottom: '15px' },
  cartelera: { backgroundColor: '#1E293B', padding: '15px', borderRadius: '8px', border: '1px solid #334155' },
  controlesCine: { display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' },
  botonInvitar: { backgroundColor: '#10B981', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' },
  botonPrime: { backgroundColor: '#334155', color: '#00A8E1', border: '1px solid #00A8E1', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }
};