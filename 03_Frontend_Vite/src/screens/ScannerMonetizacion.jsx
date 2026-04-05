import React, { useState } from 'react';

export default function ScannerMonetizacion() {
  const [estadoEscaneo, setEstadoEscaneo] = useState('esperando');
  const [registroLogistico, setRegistroLogistico] = useState(null);

  const procesarPaqueteMonetizado = () => {
    setEstadoEscaneo('procesando');
    
    // Simulación de la comunicación con la API de Amazon / Mercado Libre
    setTimeout(() => {
      const comisionTotal = 5.00; // Valor ilustrativo en la moneda local
      
      setRegistroLogistico({
        empresa: 'Amazon Logistics',
        tracking: 'AMZ-TBA987654321',
        comisionGenerada: comisionTotal,
        distribucion: {
          guardia: (comisionTotal * 0.40).toFixed(2), // 40% al guardia
          propiedad: (comisionTotal * 0.40).toFixed(2), // 40% al condominio
          infraestructura: (comisionTotal * 0.20).toFixed(2) // 20% para servidores y software
        }
      });
      setEstadoEscaneo('completado');
    }, 2500);
  };

  return (
    <div style={estilos.contenedorMonetizacion}>
      <h3 style={estilos.titulo}>📦 Escáner Logístico (Red de Agencias)</h3>
      <p style={estilos.descripcion}>Centro de Ingresos para Guardias y Condominio</p>

      {estadoEscaneo === 'esperando' && (
        <button onClick={procesarPaqueteMonetizado} style={estilos.botonEscanear}>
          Escanear Código de Paquete
        </button>
      )}

      {estadoEscaneo === 'procesando' && (
        <div style={estilos.panelProcesando}>
          <p>Conectando con plataforma logística...</p>
          <div style={estilos.loader}></div>
        </div>
      )}

      {estadoEscaneo === 'completado' && registroLogistico && (
        <div style={estilos.panelResultados}>
          <h4 style={estilos.textoExito}>✅ Paquete Registrado y Comisión Liberada</h4>
          
          <div style={estilos.detallePaquete}>
            <p><strong>Operador:</strong> {registroLogistico.empresa}</p>
            <p><strong>Rastreo:</strong> {registroLogistico.tracking}</p>
          </div>

          <div style={estilos.moduloDistribucion}>
            <h5>Distribución de Ingresos de esta operación:</h5>
            <ul style={estilos.listaFondos}>
              <li style={estilos.itemFondo}>
                <span>👮 Bono Directo a Guardia:</span>
                <span style={estilos.monto}>+ ${registroLogistico.distribucion.guardia}</span>
              </li>
              <li style={estilos.itemFondo}>
                <span>🏢 Fondo Propiedad (Supervisado por Marina):</span>
                <span style={estilos.monto}>+ ${registroLogistico.distribucion.propiedad}</span>
              </li>
              <li style={estilos.itemFondo}>
                <span>☁️ Fondo Infraestructura (AWS/Software):</span>
                <span style={estilos.monto}>+ ${registroLogistico.distribucion.infraestructura}</span>
              </li>
            </ul>
          </div>
          
          <button onClick={() => setEstadoEscaneo('esperando')} style={estilos.botonSiguiente}>
            Escanear Siguiente Paquete
          </button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorMonetizacion: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '2px solid #38BDF8', marginTop: '20px' },
  titulo: { color: '#0F172A', fontSize: '18px', margin: '0 0 5px 0' },
  descripcion: { color: '#64748B', fontSize: '14px', marginBottom: '15px' },
  botonEscanear: { backgroundColor: '#F59E0B', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', width: '100%', fontSize: '16px', fontWeight: 'bold' },
  panelProcesando: { textAlign: 'center', padding: '20px', color: '#38BDF8' },
  loader: { width: '40px', height: '40px', border: '4px solid #E2E8F0', borderTop: '4px solid #38BDF8', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '10px auto' },
  panelResultados: { backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  textoExito: { color: '#10B981', margin: '0 0 15px 0' },
  detallePaquete: { backgroundColor: '#F1F5F9', padding: '10px', borderRadius: '5px', marginBottom: '15px', fontSize: '14px' },
  moduloDistribucion: { borderTop: '2px dashed #CBD5E1', paddingTop: '15px' },
  listaFondos: { listStyleType: 'none', padding: 0, margin: 0 },
  itemFondo: { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F1F5F9', fontSize: '14px', color: '#475569' },
  monto: { fontWeight: 'bold', color: '#10B981' },
  botonSiguiente: { backgroundColor: '#0F172A', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', width: '100%', marginTop: '15px', fontWeight: 'bold' }
};