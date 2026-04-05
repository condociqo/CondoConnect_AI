import React, { useState } from 'react';

export default function TiendaMejorasInsumos() {
  const [carrito, setCarrito] = useState([
    { id: 1, articulo: 'Cámara IP 4K Hikvision (Amazon)', cantidad: 2, precio: 3500 },
    { id: 2, articulo: 'Pintura Impermeabilizante 19L (Mercado Libre)', cantidad: 5, precio: 1200 }
  ]);
  const [solicitando, setSolicitando] = useState(false);

  const totalCarrito = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  const enviarParaAprobacion = () => {
    setSolicitando(true);
    setTimeout(() => {
      setSolicitando(false);
      alert(`📤 Orden enviada a la Mesa Directiva.\nSe requiere FIRMA BIOMÉTRICA de un miembro autorizado para liberar $${totalCarrito} MXN del Fondo de Monetización.`);
    }, 2500);
  };

  return (
    <div style={estilos.contenedorTienda}>
      <div style={estilos.headerTienda}>
        <h3 style={estilos.titulo}>🛒 Inversión en Mejoras (B2B E-Commerce)</h3>
        <p style={estilos.subtitulo}>Conexión directa con Amazon Business y Mercado Libre.</p>
      </div>

      <div style={estilos.layoutPantalla}>
        <div style={estilos.panelCatalogo}>
          <h4>Buscador de Insumos</h4>
          <input type="text" placeholder="🔍 Buscar pintura, herramientas, tecnología..." style={estilos.inputBusqueda} />
          <div style={estilos.resultadosSimulados}>
            <p style={{color: '#94A3B8', fontStyle: 'italic', textAlign: 'center', marginTop: '40px'}}>
              Conectando con catálogos en vivo de Amazon y Mercado Libre...
            </p>
          </div>
        </div>

        <div style={estilos.panelCarrito}>
          <h4>Carrito de Mejoras</h4>
          <ul style={estilos.listaCarrito}>
            {carrito.map(item => (
              <li key={item.id} style={estilos.itemCarrito}>
                <span>{item.cantidad}x {item.articulo}</span>
                <strong>${(item.precio * item.cantidad).toLocaleString('es-MX')}</strong>
              </li>
            ))}
          </ul>
          
          <div style={estilos.totalContainer}>
            <span>Total a solicitar:</span>
            <span style={estilos.montoTotal}>${totalCarrito.toLocaleString('es-MX')} MXN</span>
          </div>

          <button onClick={enviarParaAprobacion} disabled={solicitando} style={estilos.botonAprobacion}>
            {solicitando ? 'Procesando...' : '📝 Solicitar Compra al Consejo'}
          </button>
          <p style={estilos.notaRestriccion}>
            El Administrador no puede ejecutar el pago. El pedido requiere autorización facial del Directivo.
          </p>
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorTienda: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif', marginTop: '20px' },
  headerTienda: { borderBottom: '2px solid #E2E8F0', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '14px', margin: '5px 0 0 0' },
  layoutPantalla: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  panelCatalogo: { flex: 2, minWidth: '300px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  inputBusqueda: { width: '100%', padding: '12px', borderRadius: '6px', border: '2px solid #38BDF8', fontSize: '16px', marginBottom: '15px' },
  resultadosSimulados: { height: '200px', backgroundColor: '#F1F5F9', borderRadius: '6px', border: '1px dashed #CBD5E1' },
  panelCarrito: { flex: 1, minWidth: '250px', backgroundColor: '#0F172A', color: 'white', padding: '20px', borderRadius: '8px' },
  listaCarrito: { listStyleType: 'none', padding: 0, margin: '0 0 20px 0' },
  itemCarrito: { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '10px', marginBottom: '10px', fontSize: '14px' },
  totalContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', color: '#10B981' },
  montoTotal: { fontSize: '24px' },
  botonAprobacion: { backgroundColor: '#F59E0B', color: '#0F172A', border: 'none', padding: '15px', width: '100%', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' },
  notaRestriccion: { fontSize: '11px', color: '#94A3B8', marginTop: '15px', textAlign: 'center', fontStyle: 'italic' }
};