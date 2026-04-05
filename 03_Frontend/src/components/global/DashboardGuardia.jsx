// Fragmento de código a insertar en el Dashboard del Guardia
<div style={estilos.seccionBilleteraRapida}>
  <div style={{ flex: 1 }}>
    <p style={{ margin: 0, fontSize: '12px', color: '#94A3B8' }}>Ganancia por Logística</p>
    <h2 style={{ margin: 0, color: '#10B981' }}>$452.00 MXN</h2>
  </div>
  <button 
    onClick={() => setVistaActual('BilleteraDetalle')} 
    style={estilos.botonVerCartera}>
    Ver Mi Cartera 💳
  </button>
</div>