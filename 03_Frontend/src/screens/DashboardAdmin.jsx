import React, { useState } from 'react';

export default function DashboardAdmin() {
  const [metricas, setMetricas] = useState({
    ingresosMonetizacion: '$1,250.00',
    visitasHoy: 45,
    alertasSOS: 0,
    paquetesPendientes: 12
  });

  return (
    <div style={estilos.contenedorAdmin}>
      {/* Barra de Navegación Lateral (Simulada) */}
      <aside style={estilos.sidebar}>
        <h2 style={estilos.logoTexto}>CondoConnect ♾️</h2>
        <nav style={estilos.menu}>
          <a href="#" style={estilos.menuItemActivo}>📊 Resumen General</a>
          <a href="#" style={estilos.menuItem}>👥 Residentes y Propiedades</a>
          <a href="#" style={estilos.menuItem}>👮 Personal de Seguridad</a>
          <a href="#" style={estilos.menuItem}>💰 Finanzas y Monetización</a>
          <a href="#" style={estilos.menuItem}>⚙️ Configuración y Roles</a>
        </nav>
      </aside>

      {/* Área Principal */}
      <main style={estilos.mainContent}>
        <header style={estilos.header}>
          <h2>Panel de Administración</h2>
          <div style={estilos.perfilAdmin}>👤 Admin: Comité Central</div>
        </header>

        {/* Tarjetas de Métricas Rápidas */}
        <div style={estilos.gridMetricas}>
          <div style={estilos.tarjetaMetrica}>
            <h4>📦 Monetización (Fondo Propiedad)</h4>
            <p style={estilos.valorPositivo}>{metricas.ingresosMonetizacion} MXN</p>
          </div>
          <div style={estilos.tarjetaMetrica}>
            <h4>🚗 Visitas Registradas Hoy</h4>
            <p style={estilos.valorNeutral}>{metricas.visitasHoy}</p>
          </div>
          <div style={estilos.tarjetaMetrica}>
            <h4>🚨 Alertas de Seguridad</h4>
            <p style={metricas.alertasSOS > 0 ? estilos.valorNegativo : estilos.valorNeutral}>
              {metricas.alertasSOS} Incidentes
            </p>
          </div>
        </div>

        {/* Sección de Actividad Reciente */}
        <div style={estilos.seccionActividad}>
          <h3>Últimas Actividades en Caseta</h3>
          <ul style={estilos.listaActividad}>
            <li>✔️ El Guardia Víctor completó su recorrido (Hace 10 min)</li>
            <li>📦 Paquete Amazon entregado al Depto 402 (Hace 25 min)</li>
            <li>🚗 Ingreso de proveedor de limpieza al Depto 105 (Hace 1 hora)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

const estilos = {
  contenedorAdmin: { display: 'flex', height: '100vh', backgroundColor: '#F1F5F9', fontFamily: 'sans-serif' },
  sidebar: { width: '250px', backgroundColor: '#0F172A', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column' },
  logoTexto: { color: '#38BDF8', fontSize: '24px', marginBottom: '30px', textAlign: 'center' },
  menu: { display: 'flex', flexDirection: 'column', gap: '15px' },
  menuItemActivo: { color: 'white', textDecoration: 'none', backgroundColor: '#1E293B', padding: '10px', borderRadius: '5px', fontWeight: 'bold' },
  menuItem: { color: '#94A3B8', textDecoration: 'none', padding: '10px', borderRadius: '5px' },
  mainContent: { flex: 1, padding: '20px', overflowY: 'auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid #E2E8F0', paddingBottom: '10px' },
  perfilAdmin: { fontWeight: 'bold', color: '#475569' },
  gridMetricas: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' },
  tarjetaMetrica: { backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' },
  valorPositivo: { fontSize: '24px', fontWeight: 'bold', color: '#10B981', margin: '10px 0 0 0' },
  valorNeutral: { fontSize: '24px', fontWeight: 'bold', color: '#0F172A', margin: '10px 0 0 0' },
  valorNegativo: { fontSize: '24px', fontWeight: 'bold', color: '#EF4444', margin: '10px 0 0 0' },
  seccionActividad: { backgroundColor: 'white', padding: '20px', borderRadius: '10px', border: '1px solid #E2E8F0' },
  listaActividad: { listStyleType: 'none', padding: 0 },
};