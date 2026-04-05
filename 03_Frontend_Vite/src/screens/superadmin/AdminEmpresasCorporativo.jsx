import React, { useState } from 'react';

export default function AdminEmpresasCorporativo() {
  const [empresas, setEmpresas] = useState([
    { nombre: 'Tech Global Solutions', piso: '4, 5 y 6', empleados: 150, cajonesAsignados: 40 },
    { nombre: 'Despacho Legal & Asociados', piso: '12', empleados: 25, cajonesAsignados: 5 }
  ]);

  return (
    <div style={estilos.contenedorCorp}>
      <div style={estilos.headerCorp}>
        <h3 style={estilos.titulo}>🏢 Gestión B2B: Inquilinos Corporativos</h3>
        <button style={estilos.botonNuevo}>+ Dar de Alta Nueva Empresa</button>
      </div>

      <p style={estilos.descripcion}>Configura los espacios y recursos asignados a cada empresa dentro de la torre.</p>

      <table style={estilos.tablaCorp}>
        <thead>
          <tr style={estilos.filaCabecera}>
            <th style={estilos.celda}>Razón Social</th>
            <th style={estilos.celda}>Pisos / Ubicación</th>
            <th style={estilos.celda}>Empleados Registrados</th>
            <th style={estilos.celda}>Cajones Asignados</th>
            <th style={estilos.celda}>Administración de Recursos</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((emp, idx) => (
            <tr key={idx} style={estilos.filaDatos}>
              <td style={estilos.celda}><strong>{emp.nombre}</strong></td>
              <td style={estilos.celda}>Piso(s): {emp.piso}</td>
              <td style={estilos.celda}>{emp.empleados} <span style={estilos.link}>Ver lista</span></td>
              <td style={estilos.celda}>{emp.cajonesAsignados}</td>
              <td style={estilos.celda}>
                <button style={estilos.botonGestion}>Modificar Cuotas</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const estilos = {
  contenedorCorp: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #CBD5E1', marginTop: '20px', fontFamily: 'sans-serif' },
  headerCorp: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #F1F5F9', paddingBottom: '15px', marginBottom: '15px' },
  titulo: { color: '#0F172A', margin: 0 },
  botonNuevo: { backgroundColor: '#10B981', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none', fontWeight: 'bold', cursor: 'pointer' },
  descripcion: { color: '#64748B', marginBottom: '20px' },
  tablaCorp: { width: '100%', borderCollapse: 'collapse' },
  filaCabecera: { backgroundColor: '#F8FAFC', textAlign: 'left' },
  filaDatos: { borderBottom: '1px solid #F1F5F9' },
  celda: { padding: '15px', color: '#1E293B' },
  link: { color: '#3B82F6', textDecoration: 'underline', cursor: 'pointer', fontSize: '12px', marginLeft: '10px' },
  botonGestion: { backgroundColor: '#0F172A', color: 'white', padding: '8px 12px', borderRadius: '5px', border: 'none', fontSize: '12px', cursor: 'pointer' }
};