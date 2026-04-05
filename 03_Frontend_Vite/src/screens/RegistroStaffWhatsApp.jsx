import React, { useState } from 'react';

export default function RegistroStaffWhatsApp() {
  const [datosStaff, setDatosStaff] = useState({
    nombre: '', depto: '', tipo: 'Limpieza'
  });
  const [enviando, setEnviando] = useState(false);

  const registrarYNotificar = (e) => {
    e.preventDefault();
    setEnviando(true);
    
    // Simulación de conexión a la API de WhatsApp Business
    setTimeout(() => {
      setEnviando(false);
      alert(`✅ Registro exitoso.\nMarina ha enviado un WhatsApp al Depto ${datosStaff.depto}:\n"Hola, tu personal de ${datosStaff.tipo} (${datosStaff.nombre}) acaba de ingresar a las ${new Date().toLocaleTimeString()}."`);
      setDatosStaff({ nombre: '', depto: '', tipo: 'Limpieza' }); // Limpiar formulario
    }, 2000);
  };

  return (
    <div style={estilos.contenedorStaff}>
      <h3 style={estilos.titulo}>👷‍♀️ Ingreso de Personal y Staff</h3>
      <p style={estilos.descripcion}>El residente recibirá una alerta por WhatsApp automáticamente.</p>

      <form onSubmit={registrarYNotificar} style={estilos.formulario}>
        <div style={estilos.campo}>
          <label>Nombre del Trabajador:</label>
          <input 
            type="text" 
            required 
            value={datosStaff.nombre}
            onChange={(e) => setDatosStaff({...datosStaff, nombre: e.target.value})}
            style={estilos.input} 
            placeholder="Ej. María Sánchez"
          />
        </div>

        <div style={estilos.grid2}>
          <div style={estilos.campo}>
            <label>Departamento:</label>
            <input 
              type="text" 
              required 
              value={datosStaff.depto}
              onChange={(e) => setDatosStaff({...datosStaff, depto: e.target.value})}
              style={estilos.input} 
              placeholder="Ej. 501"
            />
          </div>

          <div style={estilos.campo}>
            <label>Rol / Labor:</label>
            <select 
              value={datosStaff.tipo}
              onChange={(e) => setDatosStaff({...datosStaff, tipo: e.target.value})}
              style={estilos.input}
            >
              <option value="Limpieza">Limpieza / Empleada doméstica</option>
              <option value="Mantenimiento">Mantenimiento / Plomero / etc</option>
              <option value="Niñera">Niñera / Cuidador</option>
              <option value="Construcción">Construcción / Obra</option>
            </select>
          </div>
        </div>

        <button type="submit" disabled={enviando} style={estilos.botonWhatsApp}>
          {enviando ? 'Enviando WhatsApp...' : '✅ Registrar Acceso y Enviar Alerta'}
        </button>
      </form>
    </div>
  );
}

const estilos = {
  contenedorStaff: { padding: '20px', backgroundColor: '#F0FDF4', border: '2px solid #4ADE80', borderRadius: '10px', marginTop: '15px' },
  titulo: { color: '#166534', margin: '0 0 5px 0' },
  descripcion: { color: '#15803D', fontSize: '13px', marginBottom: '15px' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '15px' },
  grid2: { display: 'flex', gap: '15px' },
  campo: { display: 'flex', flexDirection: 'column', flex: 1 },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #86EFAC', marginTop: '5px' },
  botonWhatsApp: { backgroundColor: '#25D366', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }
};