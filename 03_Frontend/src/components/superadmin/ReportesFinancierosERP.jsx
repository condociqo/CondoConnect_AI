import React, { useState } from 'react';

export default function ReportesFinancierosERP() {
  const [tipoReporte, setTipoReporte] = useState('Estado de Resultados');
  const [propiedadFiltro, setPropiedadFiltro] = useState('Todas (Consolidado Global)');

  // Simulación de Motor Contable ERP
  const generarReporte = () => {
    alert(`📊 Generando ${tipoReporte} para ${propiedadFiltro}...\nMarina está conciliando cuentas bancarias y facturas CFDI 4.0 mediante AWS. El documento PDF / Excel estará listo en segundos.`);
  };

  return (
    <div style={estilos.contenedorERP}>
      <header style={estilos.headerERP}>
        <h3 style={estilos.titulo}>💼 Módulo Financiero Contable Avanzado (ERP)</h3>
        <p style={estilos.subtitulo}>Generación de reportes fiscales y auditoría financiera.</p>
      </header>

      <div style={estilos.panelFiltros}>
        <div style={estilos.filtroGrupo}>
          <label style={estilos.etiqueta}>Centro de Costos (Propiedad):</label>
          <select value={propiedadFiltro} onChange={(e) => setPropiedadFiltro(e.target.value)} style={estilos.select}>
            <option>Todas (Consolidado Global)</option>
            <option>Torre Zafiro Residencial</option>
            <option>Corporativo Global Sur</option>
            <option>Plaza Magna Comercial</option>
          </select>
        </div>

        <div style={estilos.filtroGrupo}>
          <label style={estilos.etiqueta}>Tipo de Formato Financiero:</label>
          <select value={tipoReporte} onChange={(e) => setTipoReporte(e.target.value)} style={estilos.select}>
            <option>Estado de Resultados (Pérdidas y Ganancias)</option>
            <option>Flujo de Efectivo (Cash Flow)</option>
            <option>Balance General</option>
            <option>Reporte de Licencias AWS y Pago con Créditos</option>
          </select>
        </div>

        <div style={estilos.filtroGrupo}>
          <label style={estilos.etiqueta}>Periodo:</label>
          <input type="month" style={estilos.select} />
        </div>
      </div>

      <button onClick={generarReporte} style={estilos.botonGenerar}>
        📈 Procesar y Generar Reporte Oficial
      </button>

      {/* Panel de Licencias y Créditos (Monetización vs Gastos AWS) */}
      <div style={estilos.panelLicencias}>
        <h4 style={estilos.tituloLicencias}>☁️ Estado de Cuenta: AWS & Licencias Operativas</h4>
        <div style={estilos.gridLicencias}>
          <div style={estilos.cajaDato}>
            <p>Créditos Generados (Paquetería)</p>
            <h3 style={estilos.montoPositivo}>+ $18,500 MXN</h3>
          </div>
          <div style={estilos.cajaDato}>
            <p>Costo Servidores y Licencias (Hikvision/Bosch)</p>
            <h3 style={estilos.montoNegativo}>- $4,200 MXN</h3>
          </div>
          <div style={estilos.cajaDatoDestacada}>
            <p>Balance a Favor (Fondo Propiedad)</p>
            <h3 style={estilos.montoNeto}>$14,300 MXN</h3>
          </div>
        </div>
        <p style={estilos.notaAutomatica}>
          * Marina paga automáticamente las licencias de controles de acceso a través del AWS Marketplace usando los créditos generados.
        </p>
      </div>
    </div>
  );
}

const estilos = {
  contenedorERP: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif' },
  headerERP: { borderBottom: '2px solid #F1F5F9', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '14px', marginTop: '5px' },
  panelFiltros: { display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px' },
  filtroGrupo: { flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column' },
  etiqueta: { fontWeight: 'bold', color: '#475569', marginBottom: '5px', fontSize: '13px' },
  select: { padding: '10px', borderRadius: '6px', border: '1px solid #94A3B8', fontSize: '14px' },
  botonGenerar: { backgroundColor: '#10B981', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', width: '100%', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginBottom: '30px' },
  panelLicencias: { backgroundColor: '#0F172A', color: 'white', padding: '20px', borderRadius: '8px', border: '2px solid #38BDF8' },
  tituloLicencias: { margin: '0 0 15px 0', color: '#38BDF8' },
  gridLicencias: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', textAlign: 'center' },
  cajaDato: { backgroundColor: '#1E293B', padding: '15px', borderRadius: '6px' },
  cajaDatoDestacada: { backgroundColor: '#064E3B', padding: '15px', borderRadius: '6px', border: '1px solid #10B981' },
  montoPositivo: { color: '#34D399', margin: '5px 0 0 0' },
  montoNegativo: { color: '#F87171', margin: '5px 0 0 0' },
  montoNeto: { color: '#10B981', margin: '5px 0 0 0', fontSize: '24px' },
  notaAutomatica: { fontSize: '12px', color: '#94A3B8', marginTop: '15px', fontStyle: 'italic' }
};