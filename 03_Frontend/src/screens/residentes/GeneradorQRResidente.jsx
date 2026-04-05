import React, { useState } from 'react';

export default function GeneradorQRResidente() {
  const [datosVisita, setDatosVisita] = useState({
    nombre: '',
    tipo: 'Familiar',
    fecha: '',
    multiusos: false
  });
  const [qrGenerado, setQrGenerado] = useState(false);

  const generarPase = (e) => {
    e.preventDefault();
    setQrGenerado(true);
  };

  return (
    <div style={estilos.appResidente}>
      <header style={estilos.cabeceraApp}>
        <h2 style={estilos.textoCabecera}>Mi Departamento (402)</h2>
        <p style={estilos.subTextoCabecera}>Bienvenido, Familia Gómez</p>
      </header>

      <div style={estilos.contenidoResidente}>
        <h3 style={estilos.tituloSeccion}>📱 Generar Pase de Acceso QR</h3>
        <p style={estilos.instruccion}>Envía este pase a tus visitas para que Marina les dé acceso rápido en la caseta.</p>

        {!qrGenerado ? (
          <form onSubmit={generarPase} style={estilos.formularioVisita}>
            <input 
              type="text" 
              placeholder="Nombre del Visitante / Empresa" 
              required 
              onChange={e => setDatosVisita({...datosVisita, nombre: e.target.value})}
              style={estilos.inputRes} 
            />
            
            <div style={estilos.filaSelect}>
              <select onChange={e => setDatosVisita({...datosVisita, tipo: e.target.value})} style={estilos.inputRes}>
                <option value="Familiar">Amigos / Familia</option>
                <option value="Delivery">Repartidor (Comida/Paquetes)</option>
                <option value="Servicio">Staff / Servicio (Plomero, etc)</option>
              </select>
              
              <input type="date" required style={estilos.inputRes} />
            </div>

            <div style={estilos.switchContainer}>
              <input type="checkbox" style={estilos.checkboxRes} />
              <label>Pase Multiusos (Válido para múltiples entradas hoy)</label>
            </div>

            <button type="submit" style={estilos.botonGenerarQR}>
              Generar Código QR
            </button>
          </form>
        ) : (
          <div style={estilos.paseGenerado}>
            <div style={estilos.qrBox}>
              <div style={estilos.simuladorGraficoQR}>
                <p style={{fontSize:'50px', margin:0}}>⬛⬜⬛</p>
                <p style={{fontSize:'50px', margin:0}}>⬜⬛⬜</p>
                <p style={{fontSize:'50px', margin:0}}>⬛⬜⬛</p>
              </div>
            </div>
            <h4 style={estilos.nombreVisita}>{datosVisita.nombre}</h4>
            <p style={estilos.tipoVisita}>Tipo: {datosVisita.tipo}</p>
            <p style={estilos.notaSeguridad}>Este código se autodestruirá tras su uso.</p>

            <button style={estilos.botonCompartir}>
              📲 Compartir por WhatsApp
            </button>
            <button onClick={() => setQrGenerado(false)} style={estilos.botonNuevo}>
              Crear Nuevo Pase
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const estilos = {
  appResidente: { backgroundColor: '#F1F5F9', minHeight: '100vh', fontFamily: 'sans-serif', maxWidth: '480px', margin: '0 auto', border: '1px solid #E2E8F0' },
  cabeceraApp: { backgroundColor: '#0284C7', padding: '20px', color: 'white', textAlign: 'center', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  textoCabecera: { margin: 0, fontSize: '22px' },
  subTextoCabecera: { margin: '5px 0 0 0', fontSize: '14px', color: '#E0F2FE' },
  contenidoResidente: { padding: '20px' },
  tituloSeccion: { color: '#0F172A', margin: '0 0 5px 0' },
  instruccion: { color: '#64748B', fontSize: '14px', marginBottom: '20px' },
  formularioVisita: { display: 'flex', flexDirection: 'column', gap: '15px' },
  inputRes: { padding: '15px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '16px', flex: 1 },
  filaSelect: { display: 'flex', gap: '10px' },
  switchContainer: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#475569' },
  checkboxRes: { width: '20px', height: '20px' },
  botonGenerarQR: { backgroundColor: '#0F172A', color: 'white', padding: '15px', borderRadius: '10px', border: 'none', fontSize: '18px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' },
  paseGenerado: { backgroundColor: 'white', padding: '20px', borderRadius: '15px', textAlign: 'center', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' },
  qrBox: { display: 'inline-block', padding: '20px', backgroundColor: 'white', border: '2px dashed #0284C7', borderRadius: '10px', marginBottom: '15px' },
  simuladorGraficoQR: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  nombreVisita: { margin: '0 0 5px 0', fontSize: '20px', color: '#0F172A' },
  tipoVisita: { margin: 0, color: '#64748B' },
  notaSeguridad: { fontSize: '12px', color: '#10B981', fontStyle: 'italic', margin: '15px 0' },
  botonCompartir: { backgroundColor: '#25D366', color: 'white', padding: '15px', width: '100%', borderRadius: '10px', border: 'none', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' },
  botonNuevo: { backgroundColor: 'transparent', color: '#0284C7', padding: '10px', width: '100%', border: 'none', textDecoration: 'underline', cursor: 'pointer' }
};