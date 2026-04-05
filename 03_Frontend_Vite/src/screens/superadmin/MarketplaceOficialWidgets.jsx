import React, { useState } from 'react';

export default function MarketplaceOficialWidgets({ verticalCliente }) {
  // Estos son módulos nativos, NO descargas de internet
  const [widgets] = useState([
    { id: 'W-01', nombre: 'Integración SAP ERP', categoria: 'Parque Industrial', activo: false, oficial: true },
    { id: 'W-02', nombre: 'Lector de Pasaportes OCR', categoria: 'Hotel', activo: true, oficial: true },
    { id: 'W-03', nombre: 'Facturación Masiva SAT', categoria: 'Global', activo: false, oficial: true }
  ]);

  const alternarWidget = (nombre) => {
    // Alerta de seguridad para demostrar el entorno cerrado
    alert(`🔒 Acción Segura: Activando módulo nativo [${nombre}].\n\nMarina AI valida: Este módulo está firmado digitalmente por CondoConnect AI Inc. Cero riesgo de código de terceros.`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🛡️ App Store Oficial CondoConnect AI</h2>
      <p style={{ color: '#64748B' }}>Entorno de alta seguridad (Jardín Cerrado). Solo se permiten módulos certificados.</p>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {widgets.map(w => (
          <div key={w.id} style={{ padding: '15px', border: '1px solid #CBD5E1', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <strong>{w.nombre}</strong> <span style={{ fontSize: '12px', backgroundColor: '#DBEAFE', padding: '3px 8px', borderRadius: '10px' }}>✔️ Verificado</span>
              <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: '#475569' }}>Vertical recomendada: {w.categoria}</p>
            </div>
            <button 
              onClick={() => alternarWidget(w.nombre)}
              style={{ backgroundColor: w.activo ? '#EF4444' : '#10B981', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}>
              {w.activo ? 'Apagar Módulo' : 'Encender Módulo'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}