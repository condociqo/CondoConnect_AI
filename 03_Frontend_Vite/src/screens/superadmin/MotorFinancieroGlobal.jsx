import React, { useState } from 'react';

export default function MotorFinancieroGlobal() {
  const [tipoReporte, setTipoReporte] = useState('EstadoResultados');

  // Datos consolidados procesados por AWS RDS
  const datosFinancieros = {
    ingresos: { cuotas: 2500000, monetizacionLogistica: 45000, multas: 12000, amenidades: 35000 },
    egresos: { nominaGuardias: 800000, licenciasAWS: 5000, mantenimientoFisico: 300000, servicios: 150000 },
    activos: { cuentasBancarias: 3500000, fondoReserva: 1200000 },
    pasivos: { cuentasPorPagar: 200000, impuestosPorPagar: 85000 }
  };

  const calcularUtilidad = () => {
    const totalIngresos = Object.values(datosFinancieros.ingresos).reduce((a, b) => a + b, 0);
    const totalEgresos = Object.values(datosFinancieros.egresos).reduce((a, b) => a + b, 0);
    return totalIngresos - totalEgresos;
  };

  return (
    <div style={estilos.contenedorFinanzas}>
      <header style={estilos.headerFinanzas}>
        <h3 style={estilos.titulo}>📈 Motor Financiero y Contable (Estándar NIIF)</h3>
        <select value={tipoReporte} onChange={e => setTipoReporte(e.target.value)} style={estilos.selector}>
          <option value="EstadoResultados">Estado de Resultados (Pérdidas y Ganancias)</option>
          <option value="FlujoEfectivo">Flujo de Efectivo (Cashflow)</option>
          <option value="BalanceGeneral">Balance General</option>
        </select>
      </header>

      {tipoReporte === 'EstadoResultados' && (
        <div style={estilos.reportePapel}>
          <h4 style={estilos.tituloReporte}>ESTADO DE RESULTADOS CONSOLIDADO</h4>
          
          <div style={estilos.seccionContable}>
            <h5>INGRESOS OPERATIVOS</h5>
            <div style={estilos.fila}><span>Cuotas de Mantenimiento</span> <span>${datosFinancieros.ingresos.cuotas.toLocaleString()}</span></div>
            <div style={estilos.filaDestacada}><span>Fondo Monetización (Logística/Paquetes)</span> <span>${datosFinancieros.ingresos.monetizacionLogistica.toLocaleString()}</span></div>
            <div style={estilos.fila}><span>Multas y Sanciones</span> <span>${datosFinancieros.ingresos.multas.toLocaleString()}</span></div>
            <div style={estilos.filaTotal}><span>TOTAL INGRESOS</span> <span>${Object.values(datosFinancieros.ingresos).reduce((a, b) => a + b, 0).toLocaleString()}</span></div>
          </div>

          <div style={estilos.seccionContable}>
            <h5>EGRESOS OPERATIVOS</h5>
            <div style={estilos.fila}><span>Nómina y Seguridad Privada</span> <span>${datosFinancieros.egresos.nominaGuardias.toLocaleString()}</span></div>
            <div style={estilos.fila}><span>Mantenimiento Preventivo/Correctivo</span> <span>${datosFinancieros.egresos.mantenimientoFisico.toLocaleString()}</span></div>
            <div style={estilos.filaDestacadaAWS}><span>Licencias Cloud AWS e IoT</span> <span>${datosFinancieros.egresos.licenciasAWS.toLocaleString()}</span></div>
            <div style={estilos.filaTotal}><span>TOTAL EGRESOS</span> <span>${Object.values(datosFinancieros.egresos).reduce((a, b) => a + b, 0).toLocaleString()}</span></div>
          </div>

          <div style={estilos.seccionUtilidad}>
            <h4>RESULTADO DEL EJERCICIO (UTILIDAD)</h4>
            <h2 style={{color: calcularUtilidad() > 0 ? '#10B981' : '#EF4444'}}>
              ${calcularUtilidad().toLocaleString()} MXN
            </h2>
          </div>
        </div>
      )}

      <button style={estilos.botonExportar}>📥 Exportar a Excel / PDF para Auditoría</button>
    </div>
  );
}

const estilos = {
  contenedorFinanzas: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif', marginTop: '20px' },
  headerFinanzas: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' },
  titulo: { color: '#0F172A', margin: 0 },
  selector: { padding: '10px', borderRadius: '6px', border: '1px solid #94A3B8', fontSize: '16px', backgroundColor: 'white' },
  reportePapel: { backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '4px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', border: '1px solid #E2E8F0' },
  tituloReporte: { textAlign: 'center', borderBottom: '2px solid #0F172A', paddingBottom: '10px', marginBottom: '20px' },
  seccionContable: { marginBottom: '20px' },
  fila: { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px dotted #CBD5E1', color: '#475569' },
  filaDestacada: { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px dotted #CBD5E1', color: '#059669', fontWeight: 'bold', backgroundColor: '#ECFDF5' },
  filaDestacadaAWS: { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px dotted #CBD5E1', color: '#EA580C', fontWeight: 'bold', backgroundColor: '#FFF7ED' },
  filaTotal: { display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '2px solid #94A3B8', color: '#0F172A', fontWeight: 'bold', marginTop: '10px' },
  seccionUtilidad: { textAlign: 'center', marginTop: '30px', padding: '20px', backgroundColor: '#F1F5F9', borderRadius: '8px' },
  botonExportar: { width: '100%', padding: '15px', backgroundColor: '#1E293B', color: 'white', border: 'none', borderRadius: '8px', marginTop: '20px', fontWeight: 'bold', cursor: 'pointer' }
};