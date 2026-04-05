import React, { useState } from 'react';

export default function BovedaMonetizacionDirectiva() {
  const [fondos] = useState({
    amazonLogistics: 45000.00,
    mercadoLibreAgencia: 22300.50,
    fastTrackCorporativo: 15000.00,
    totalDisponible: 82300.50
  });

  return (
    <div style={estilos.contenedorBoveda}>
      <div style={estilos.headerBoveda}>
        <h2 style={estilos.titulo}>🛡️ Bóveda de Alta Seguridad (Fondos de Monetización)</h2>
        <div style={estilos.badgeAcceso}>ACCESO RESTRINGIDO: SOLO CONSEJO DIRECTIVO</div>
      </div>

      <p style={estilos.textoAlerta}>
        <strong>Atención:</strong> Estos fondos están aislados. La administración operativa no tiene permisos para visualizarlos ni transferirlos.
      </p>

      <div style={estilos.gridFondos}>
        <div style={estilos.tarjetaFondo}>
          <p style={estilos.etiquetaFondo}>📦 Amazon Logistics Hub</p>
          <h3 style={estilos.montoFondo}>${fondos.amazonLogistics.toLocaleString('es-MX')}</h3>
        </div>
        <div style={estilos.tarjetaFondo}>
          <p style={estilos.etiquetaFondo}>🤝 Mercado Libre Agencias</p>
          <h3 style={estilos.montoFondo}>${fondos.mercadoLibreAgencia.toLocaleString('es-MX')}</h3>
        </div>
        <div style={estilos.tarjetaFondo}>
          <p style={estilos.etiquetaFondo}>🚀 Delivery Fast-Track</p>
          <h3 style={estilos.montoFondo}>${fondos.fastTrackCorporativo.toLocaleString('es-MX')}</h3>
        </div>
      </div>

      <div style={estilos.cajaTotal}>
        <h4>Fondo Total Protegido por Marina AI</h4>
        <h1 style={estilos.montoTotal}>${fondos.totalDisponible.toLocaleString('es-MX')} MXN</h1>
        <button style={estilos.botonComprar}>
          🛒 Ir a Tienda de Mejoras (Amazon/ML Business)
        </button>
      </div>
    </div>
  );
}

const estilos = {
  contenedorBoveda: { padding: '30px', backgroundColor: '#020617', borderRadius: '15px', color: 'white', fontFamily: 'sans-serif', border: '2px solid #F59E0B' },
  headerBoveda: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#FCD34D', margin: 0 },
  badgeAcceso: { backgroundColor: '#78350F', color: '#FDE68A', padding: '8px 12px', borderRadius: '5px', fontSize: '12px', fontWeight: 'bold', border: '1px solid #F59E0B' },
  textoAlerta: { color: '#94A3B8', fontSize: '14px', backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #F59E0B', marginBottom: '25px' },
  gridFondos: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' },
  tarjetaFondo: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '10px', border: '1px solid #1E293B', textAlign: 'center' },
  etiquetaFondo: { margin: '0 0 10px 0', color: '#CBD5E1', fontSize: '14px' },
  montoFondo: { margin: 0, fontSize: '24px', color: '#38BDF8' },
  cajaTotal: { backgroundColor: '#1E293B', padding: '30px', borderRadius: '10px', textAlign: 'center', border: '2px dashed #10B981' },
  montoTotal: { fontSize: '48px', color: '#10B981', margin: '10px 0 20px 0' },
  botonComprar: { backgroundColor: '#F59E0B', color: '#0F172A', border: 'none', padding: '15px 30px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }
};