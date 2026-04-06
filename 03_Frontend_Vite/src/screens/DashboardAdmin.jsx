import React, { useState } from 'react';
import { eliteCampanarioDB } from '../data/elite_data';
import { torreADB } from '../data/torrea_data';

export default function DashboardAdmin() {
  const [herramienta, setHerramienta] = useState('residentes');
  const [propiedadActiva, setPropiedadActiva] = useState('Elite'); // Selector de Condominio

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'sans-serif' }}>
      <div style={{ width: '280px', backgroundColor: '#ffffff', padding: '20px', borderRight: '1px solid #e2e8f0', overflowY: 'auto' }}>
        <h3 style={{ color: '#0369a1', marginBottom: '10px' }}>🏢 Gobernanza</h3>
        
        {/* SELECTOR DE PROPIEDAD (MULTITENANCY) */}
        <div style={{ marginBottom: '20px', background: '#f1f5f9', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
          <p style={{ fontSize: '10px', color: '#64748b', fontWeight: 'bold', margin: '0 0 5px 0' }}>PROPIEDAD ACTIVA</p>
          <select 
            value={propiedadActiva} 
            onChange={(e) => setPropiedadActiva(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #94a3b8', background: 'white', fontWeight: 'bold', color: '#0f172a', cursor: 'pointer' }}
          >
            <option value="Elite">Elite Campanario (LPR)</option>
            <option value="TorreA">Torre A (Tarjetas RFID)</option>
          </select>
        </div>
        
        <p style={{fontSize: '11px', color: '#64748b', fontWeight: 'bold'}}>COMUNIDAD</p>
        <button onClick={() => setHerramienta('residentes')} style={{ width: '100%', padding: '10px', marginBottom: '5px', background: herramienta==='residentes'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer', borderRadius: '5px', color: herramienta==='residentes'?'#0369a1':'#334155', fontWeight: herramienta==='residentes'?'bold':'normal' }}>👥 Padrón / Accesos</button>
        <button onClick={() => setHerramienta('amenidades')} style={{ width: '100%', padding: '10px', marginBottom: '5px', background: herramienta==='amenidades'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer', borderRadius: '5px', color: '#334155' }}>🎾 Gestión Amenidades</button>
        
        <p style={{fontSize: '11px', color: '#64748b', fontWeight: 'bold', marginTop: '15px'}}>FINANZAS</p>
        <button onClick={() => setHerramienta('finanzas')} style={{ width: '100%', padding: '10px', marginBottom: '5px', background: herramienta==='finanzas'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer', borderRadius: '5px', color: '#334155' }}>💰 Conciliación y Cobranza</button>
      </div>

      <div style={{ flex: 1, padding: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
          <h2 style={{ margin: 0 }}>Ecosistema de Armonía</h2>
          <span style={{ background: '#020617', color: '#00E5FF', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', border: '1px solid #00E5FF' }}>
            MODO ADMINISTRADOR
          </span>
        </div>

        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', minHeight: '500px', border: '1px solid #e2e8f0', marginTop: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          
          {herramienta === 'residentes' && propiedadActiva === 'Elite' && (
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
                <h3 style={{color:'#0ea5e9', margin: 0}}>Padrón Activo: Elite Campanario</h3>
                <span style={{background: '#10b981', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'}}>LPR Activo</span>
              </div>
              <div style={{ overflowY: 'auto', maxHeight: '450px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                  <thead style={{ position: 'sticky', top: 0, background: '#f8fafc' }}>
                    <tr style={{ borderBottom: '2px solid #cbd5e1', color: '#475569', fontSize: '13px' }}>
                      <th style={{ padding: '12px' }}>Depto</th>
                      <th style={{ padding: '12px' }}>Titular</th>
                      <th style={{ padding: '12px' }}>Vehículos (Placas)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eliteCampanarioDB.map((res) => (
                      <tr key={res.id} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '14px' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>{res.id}</td>
                        <td style={{ padding: '12px' }}>{res.nombre}</td>
                        <td style={{ padding: '12px' }}>
                          {res.placas.map(p => (
                            <span key={p} style={{ background: '#e0f2fe', color: '#0369a1', padding: '3px 8px', borderRadius: '6px', marginRight: '5px', fontSize: '11px', display: 'inline-block' }}>🚗 {p}</span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {herramienta === 'residentes' && propiedadActiva === 'TorreA' && (
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
                <h3 style={{color:'#8b5cf6', margin: 0}}>Padrón Activo: Torre A</h3>
                <span style={{background: '#8b5cf6', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'}}>RFID Activo</span>
              </div>
              <div style={{ overflowY: 'auto', maxHeight: '450px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                  <thead style={{ position: 'sticky', top: 0, background: '#f8fafc' }}>
                    <tr style={{ borderBottom: '2px solid #cbd5e1', color: '#475569', fontSize: '13px' }}>
                      <th style={{ padding: '12px' }}>Depto</th>
                      <th style={{ padding: '12px' }}>Residente</th>
                      <th style={{ padding: '12px' }}>No. Tarjeta RFID</th>
                      <th style={{ padding: '12px' }}>Zonas Autorizadas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {torreADB.map((res) => (
                      <tr key={res.depto} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '14px' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>{res.depto}</td>
                        <td style={{ padding: '12px' }}>{res.nombre}</td>
                        <td style={{ padding: '12px', fontFamily: 'monospace', color: '#64748b' }}>{res.tarjeta}</td>
                        <td style={{ padding: '12px' }}>
                          {res.accesos.map(a => (
                            <span key={a} style={{ background: '#f3e8ff', color: '#6d28d9', padding: '3px 8px', borderRadius: '6px', marginRight: '5px', fontSize: '11px', display: 'inline-block' }}>✓ {a}</span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {herramienta !== 'residentes' && <div><h3 style={{color:'#0ea5e9'}}>Módulo: {herramienta.toUpperCase()}</h3><p>Interfaz renderizada. Esperando Base de Datos...</p></div>}
        </div>
      </div>
    </div>
  );
}
