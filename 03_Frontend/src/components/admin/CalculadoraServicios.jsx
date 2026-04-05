import React, { useState } from 'react';

export default function CalculadoraServicios() {
  const [recibo, setRecibo] = useState({ servicio: 'Agua Potable (Global)', montoTotal: 25000, metodo: 'Porcentaje de Indiviso' });

  const ejecutarProrrateo = () => {
    alert(`🧮 Marina AI ha dividido el recibo de $${recibo.montoTotal} MXN entre los 120 departamentos utilizando el método de "${recibo.metodo}".\n\nLos cargos se han agregado a sus cuentas por cobrar y se emitirán los CFDI correspondientes al recibir el pago.`);
  };

  return (
    <div style={estilos.contenedorCalc}>
      <h3 style={estilos.titulo}>💧⚡ Calculadora y Prorrateo de Servicios Públicos</h3>
      <p style={estilos.subtitulo}>Divide recibos maestros entre la comunidad con un solo clic.</p>

      <div style={estilos.panelCalculadora}>
        <div style={estilos.inputGrupo}>
          <label style={estilos.etiqueta}>Tipo de Servicio a Prorratear</label>
          <select value={recibo.servicio} onChange={e => setRecibo({...recibo, servicio: e.target.value})} style={estilos.input}>
            <option>Agua Potable (Global)</option>
            <option>Electricidad (Áreas Comunes)</option>
            <option>Gas Estacionario (Tanque Central)</option>
          </select>
        </div>

        <div style={estilos.inputGrupo}>
          <label style={estilos.etiqueta}>Monto Total de la Factura (Proveedor)</label>
          <input type="number" value={recibo.montoTotal} onChange={e => setRecibo({...recibo, montoTotal: e.target.value})} style={estilos.inputMonto} />
        </div>

        <div style={estilos.inputGrupo}>
          <label style={estilos.etiqueta}>Método de División</label>
          <select value={recibo.metodo} onChange={e => setRecibo({...recibo, metodo: e.target.value})} style={estilos.input}>
            <option>Porcentaje de Indiviso (Tamaño del Depto)</option>
            <option>División Equitativa (Partes Iguales)</option>
            <option>Lectura de Sub-medidores Inteligentes (IoT)</option>
          </select>
        </div>

        <button onClick={ejecutarProrrateo} style={estilos.botonCalcular}>
          ➗ Generar Cargos Automáticos a Residentes
        </button>
      </div>
    </div>
  );
}

const estilos = {
  contenedorCalc: { padding: '20px', backgroundColor: '#F0FDF4', borderRadius: '10px', border: '1px solid #4ADE80', marginTop: '20px', fontFamily: 'sans-serif' },
  titulo: { color: '#166534', margin: 0 },
  subtitulo: { color: '#15803D', fontSize: '14px', marginBottom: '20px' },
  panelCalculadora: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #86EFAC', display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGrupo: { display: 'flex', flexDirection: 'column' },
  etiqueta: { fontWeight: 'bold', color: '#166534', marginBottom: '5px', fontSize: '13px' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #86EFAC', fontSize: '15px' },
  inputMonto: { padding: '15px', borderRadius: '6px', border: '2px solid #22C55E', fontSize: '20px', fontWeight: 'bold', color: '#166534' },
  botonCalcular: { backgroundColor: '#22C55E', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }
};