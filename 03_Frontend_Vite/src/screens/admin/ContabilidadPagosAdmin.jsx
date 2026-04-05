import React from 'react';

export default function ContabilidadPagosAdmin() {
  const finanzas = {
    fondoMantenimiento: 125000.00,
    carteraVencida: 15400.00,
    fondoMonetizacionLogistica: 8450.50 // Lo generado por los guardias escaneando paquetes
  };

  const residentes = [
    { depto: '101', estado: 'Al Corriente', saldo: 0 },
    { depto: '102', estado: 'Moroso (2 meses)', saldo: 3000 },
    { depto: '103', estado: 'Al Corriente', saldo: 0 }
  ];

  const enviarRecordatorio = (depto) => {
    alert(`📧 Marina ha enviado un estado de cuenta y un enlace de pago (Stripe) al WhatsApp del Depto ${depto}.`);
  };

  return (
    <div style={estilos.contenedorContable}>
      <h3 style={estilos.titulo}>💰 Finanzas y Recaudación</h3>
      
      <div style={estilos.gridCuentas}>
        <div style={estilos.tarjetaCuenta}>
          <h4>Mantenimiento Recaudado (Mes)</h4>
          <h2 style={estilos.montoVerde}>${finanzas.fondoMantenimiento.toLocaleString('es-MX')}</h2>
        </div>
        <div style={estilos.tarjetaCuenta}>
          <h4>Cartera Vencida (Morosos)</h4>
          <h2 style={estilos.montoRojo}>${finanzas.carteraVencida.toLocaleString('es-MX')}</h2>
        </div>
        <div style={estilos.tarjetaEspecial}>
          <h4>📦 Fondo Monetización (Logística)</h4>
          <h2 style={estilos.montoOro}>${finanzas.fondoMonetizacionLogistica.toLocaleString('es-MX')}</h2>
          <p style={estilos.textoExtra}>Ingreso 100% libre generado en caseta.</p>
        </div>
      </div>

      <div style={estilos.panelMorosos}>
        <h4 style={estilos.subtitulo}>Estado de Cuenta por Departamento</h4>
        <table style={estilos.tabla}>
          <tbody>
            {residentes.map(res => (
              <tr key={res.depto} style={estilos.filaDatos}>
                <td style={estilos.celda}><strong>Depto {res.depto}</strong></td>
                <td style={estilos.celda}>
                  <span style={res.estado.includes('Moroso') ? estilos.badgeRojo : estilos.badgeVerde}>
                    {res.estado}
                  </span>
                </td>
                <td style={estilos.celda}>Adeudo: ${res.saldo}</td>
                <td style={estilos.celda}>
                  {res.saldo > 0 && (
                    <button onClick={() => enviarRecordatorio(res.depto)} style={estilos.botonCobrar}>
                      📲 Enviar Recordatorio de Pago
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const estilos = {
  contenedorContable: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', marginTop: '20px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif' },
  titulo: { color: '#0F172A', margin: '0 0 20px 0' },
  gridCuentas: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' },
  tarjetaCuenta: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  tarjetaEspecial: { backgroundColor: '#0F172A', color: 'white', padding: '20px', borderRadius: '8px', border: '2px solid #F59E0B', boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)' },
  montoVerde: { color: '#10B981', margin: '10px 0 0 0', fontSize: '28px' },
  montoRojo: { color: '#EF4444', margin: '10px 0 0 0', fontSize: '28px' },
  montoOro: { color: '#FCD34D', margin: '10px 0 0 0', fontSize: '28px' },
  textoExtra: { fontSize: '12px', color: '#94A3B8', margin: '5px 0 0 0', fontStyle: 'italic' },
  panelMorosos: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  subtitulo: { color: '#334155', margin: '0 0 15px 0', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px' },
  tabla: { width: '100%', borderCollapse: 'collapse' },
  filaDatos: { borderBottom: '1px solid #F1F5F9' },
  celda: { padding: '12px', color: '#1E293B' },
  badgeVerde: { backgroundColor: '#D1FAE5', color: '#065F46', padding: '5px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' },
  badgeRojo: { backgroundColor: '#FEE2E2', color: '#991B1B', padding: '5px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' },
  botonCobrar: { backgroundColor: '#0F172A', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }
};