import React, { useState } from 'react';

export default function GestorRolesCliente() {
  const [roles] = useState(['Guardia', 'Residente', 'Supervisor', 'Contador', 'Comité de Vigilancia']);
  const [permisosActivos, setPermisosActivos] = useState({
    'Guardia': ['Leer Caseta', 'Botón SOS', 'Billetera'],
    'Contador': ['Ver Finanzas', 'Exportar Excel']
  });

  return (
    <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
      <h3>⚙️ Configuración de Roles y Permisos</h3>
      <p style={{ color: '#64748B' }}>Define qué puede ver y hacer tu personal dentro de CondoConnect AI.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        <div>
          <h4>Roles Existentes</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {roles.map(rol => (
              <li key={rol} style={{ padding: '10px', borderBottom: '1px solid #E2E8F0', cursor: 'pointer' }}>
                👤 {rol}
              </li>
            ))}
          </ul>
          <button style={{ color: '#0284C7', border: 'none', background: 'none', cursor: 'pointer' }}>+ Crear Nuevo Rol</button>
        </div>
        
        <div style={{ padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '8px' }}>
          <h4>Permisos para: <span style={{ color: '#0284C7' }}>Guardia</span></h4>
          <label style={{ display: 'block', margin: '10px 0' }}><input type="checkbox" checked readOnly /> Acceso a Bitácora Caseta</label>
          <label style={{ display: 'block', margin: '10px 0' }}><input type="checkbox" checked readOnly /> Activar Alarma SOS</label>
          <label style={{ display: 'block', margin: '10px 0' }}><input type="checkbox" /> Configurar Cámaras (Bloqueado)</label>
          <label style={{ display: 'block', margin: '10px 0' }}><input type="checkbox" /> Ver Finanzas (Bloqueado)</label>
          <button style={{ marginTop: '20px', padding: '10px', backgroundColor: '#10B981', color: 'white', border: 'none', borderRadius: '5px' }}>Guardar Cambios</button>
        </div>
      </div>
    </div>
  );
}