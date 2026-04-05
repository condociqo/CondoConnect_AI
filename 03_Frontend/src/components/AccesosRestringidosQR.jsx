import React, { useState } from 'react';

export default function AccesosRestringidosQR() {
  const [formulario, setFormulario] = useState({ empresa: '', area: 'Site Servidores', tiempo: '1 hora' });
  const [qrGenerado, setQrGenerado] = useState(false);

  const generarQRTemporal = (e) => {
    e.preventDefault();
    setQrGenerado(true);
  };

  return (
    <div style={estilos.contenedorRestringido}>
      <h3 style={estilos.titulo}>🔐 Generar Acceso a Áreas Restringidas</h3>
      <p style={estilos.descripcion}>Control estricto para contratistas y servicios.</p>

      {!qrGenerado ? (
        <form onSubmit={generarQRTemporal} style={estilos.formulario}>
          <input 
            type="text" 
            placeholder="Empresa Contratista / Nombre" 
            required 
            style={estilos.input}
            onChange={(e) => setFormulario({...formulario, empresa: e.target.value})}
          />
          
          <select style={estilos.input} onChange={(e) => setFormulario({...formulario, area: e.target.value})}>
            <option value="Site Servidores">Site de Servidores (Data Center)</option>
            <option value="Cuarto Eléctrico">Cuarto Eléctrico / Subestación</option>
            <option value="Azotea / Helipuerto">Azotea / Helipuerto</option>
          </select>

          <select style={estilos.input} onChange={(e) => setFormulario({...formulario, tiempo: e.target.value})}>
            <option value="1 hora">Validez: 1 Hora</option>
            <option value="4 horas">Validez: 4 Horas</option>
            <option value="Turno Completo">Validez: Turno Completo (8 hrs)</option>
          </select>

          <button type="submit" style={estilos.botonGenerar}>
            Generar QR Encriptado
          </button>
        </form>
      ) : (
        <div style={estilos.qrContainer}>
          <div style={estilos.simuladorQR}>
            {/* Aquí iría la librería react-qr-code */}
            <p style={{fontSize: '40px', margin: 0}}>⬛⬜⬛</p>
            <p style={{fontSize: '40px', margin: 0}}>⬜⬛⬜</p>
            <p style={{fontSize: '40px', margin: 0}}>⬛⬜⬛</p>
          </div>
          <h4 style={estilos.textoAlerta}>Código Activo y Monitoreado</h4>
          <p><strong>Contratista:</strong> {formulario.empresa}</p>
          <p><strong>Zonas Permitidas:</strong> Lobby y {formulario.area}</p>
          <p><strong>Expira en:</strong> {formulario.tiempo}</p>
          
          <button onClick={() => setQrGenerado(false)} style={estilos.botonRevocar}>
            Revocar Acceso Inmediatamente
          </button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorRestringido: { padding: '20px', backgroundColor: '#FFFBEB', borderRadius: '10px', border: '2px solid #F59E0B', marginTop: '15px' },
  titulo: { color: '#B45309', fontSize: '18px', margin: '0 0 5px 0' },
  descripcion: { color: '#D97706', fontSize: '14px', marginBottom: '15px' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #FCD34D', fontSize: '16px' },
  botonGenerar: { backgroundColor: '#F59E0B', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
  qrContainer: { textAlign: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px dashed #F59E0B' },
  simuladorQR: { display: 'inline-block', padding: '20px', backgroundColor: 'white', border: '2px solid #000', marginBottom: '15px' },
  textoAlerta: { color: '#B45309', margin: '0 0 10px 0' },
  botonRevocar: { backgroundColor: '#DC2626', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', width: '100%', marginTop: '15px', fontWeight: 'bold', cursor: 'pointer' }
};