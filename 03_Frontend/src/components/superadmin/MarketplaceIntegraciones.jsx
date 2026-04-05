import React from 'react';

export default function MarketplaceIntegraciones() {
  const activarPlugin = (plugin) => {
    alert(`🔌 Conectando API de ${plugin} a la base de datos de CondoConnect AI.\nLas claves de acceso y tokens se gestionarán bajo el estándar de seguridad ISO 27001.`);
  };

  return (
    <div style={estilos.contenedorHub}>
      <header style={estilos.headerHub}>
        <h3 style={estilos.titulo}>🧩 Hub de Integraciones y APIs (Open Architecture)</h3>
        <p style={estilos.subtitulo}>Conecta pasarelas de pago globales, software contable y widgets externos para que tu plataforma nunca quede obsoleta.</p>
      </header>

      {/* Sección 1: Pasarelas de Pago Globales */}
      <h4 style={estilos.seccionTitulo}>💳 Pasarelas de Pago Globales</h4>
      <div style={estilos.gridPlugins}>
        <div style={estilos.tarjetaPlugin}>
          <h2 style={{margin: '0 0 10px 0', color: '#6366F1'}}>Stripe</h2>
          <p style={estilos.descPlugin}>Pagos con tarjetas de crédito/débito a nivel mundial. Soporta 135+ divisas.</p>
          <button onClick={() => activarPlugin('Stripe')} style={estilos.botonConectar}>Conectar API</button>
        </div>
        <div style={estilos.tarjetaPlugin}>
          <h2 style={{margin: '0 0 10px 0', color: '#0284C7'}}>Mercado Pago</h2>
          <p style={estilos.descPlugin}>Líder en LATAM. Soporta meses sin intereses, pagos en efectivo (Oxxo) y SPEI.</p>
          <span style={estilos.badgeConectado}>✅ Conectado y Operando</span>
        </div>
        <div style={estilos.tarjetaPlugin}>
          <h2 style={{margin: '0 0 10px 0', color: '#003087'}}>PayPal</h2>
          <p style={estilos.descPlugin}>Billetera digital global para transferencias seguras y suscripciones recurrentes.</p>
          <button onClick={() => activarPlugin('PayPal')} style={estilos.botonConectar}>Conectar API</button>
        </div>
      </div>

      {/* Sección 2: APIs Contables y Widgets */}
      <h4 style={estilos.seccionTitulo}>🧾 Contabilidad, Widgets y Webhooks</h4>
      <div style={estilos.gridPlugins}>
        <div style={estilos.tarjetaPlugin}>
          <h2 style={{margin: '0 0 10px 0', color: '#10B981'}}>QuickBooks / Xero</h2>
          <p style={estilos.descPlugin}>Sincroniza los ingresos de la plataforma con tu software contable principal en tiempo real.</p>
          <button onClick={() => activarPlugin('QuickBooks')} style={estilos.botonConectar}>Conectar API</button>
        </div>
        <div style={estilos.tarjetaPlugin}>
          <h2 style={{margin: '0 0 10px 0', color: '#F59E0B'}}>Zapier (Webhooks)</h2>
          <p style={estilos.descPlugin}>Abre la plataforma. Crea automatizaciones con más de 5,000 apps externas sin programar.</p>
          <button onClick={() => activarPlugin('Webhooks Open API')} style={estilos.botonConectar}>Generar API Key</button>
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorHub: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', marginTop: '20px', fontFamily: 'sans-serif' },
  headerHub: { borderBottom: '2px solid #E2E8F0', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '14px', margin: '5px 0 0 0' },
  seccionTitulo: { color: '#38BDF8', borderBottom: '1px dashed #CBD5E1', paddingBottom: '5px', marginBottom: '15px' },
  gridPlugins: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' },
  tarjetaPlugin: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' },
  descPlugin: { fontSize: '13px', color: '#475569', marginBottom: '20px', flex: 1 },
  botonConectar: { backgroundColor: '#0F172A', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', fontWeight: 'bold', cursor: 'pointer', width: '100%' },
  badgeConectado: { backgroundColor: '#D1FAE5', color: '#065F46', padding: '10px', borderRadius: '5px', textAlign: 'center', fontWeight: 'bold', fontSize: '14px', border: '1px solid #34D399' }
};