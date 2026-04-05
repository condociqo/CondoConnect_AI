import React, { useState } from 'react';

export default function EstacionamientoInteligente() {
  const [cajones, setCajones] = useState([
    { id: 'V-01', estado: 'Ocupado', vehiculo: 'XYZ-123', deptoDestino: '102' },
    { id: 'V-02', estado: 'Libre', vehiculo: '', deptoDestino: '' },
    { id: 'V-03', estado: 'Libre', vehiculo: '', deptoDestino: '' },
    { id: 'V-04', estado: 'Ocupado', vehiculo: 'ABC-987', deptoDestino: '405' }
  ]);
  const [deptoVisita, setDeptoVisita] = useState('');
  const [sugerenciaMarina, setSugerenciaMarina] = useState(null);

  const solicitarAsignacion = (e) => {
    e.preventDefault();
    // Marina busca el cajón libre más cercano al departamento
    const cajonLibre = cajones.find(c => c.estado === 'Libre');
    if (cajonLibre) {
      setSugerenciaMarina(`Marina asigna: Cajón ${cajonLibre.id} (El más cercano a la Torre del Depto ${deptoVisita})`);
    } else {
      setSugerenciaMarina('Alerta: No hay cajones de visita disponibles en este momento.');
    }
  };

  return (
    <div style={estilos.contenedorEstacionamiento}>
      <h3 style={estilos.titulo}>🚗 Estacionamiento Inteligente (Visitas)</h3>
      
      <form onSubmit={solicitarAsignacion} style={estilos.formularioAsignacion}>
        <input 
          type="text" 
          placeholder="Depto a visitar (Ej. 102)" 
          value={deptoVisita}
          onChange={(e) => setDeptoVisita(e.target.value)}
          required 
          style={estilos.input}
        />
        <button type="submit" style={estilos.botonIA}>🧠 Solicitar Cajón a Marina</button>
      </form>

      {sugerenciaMarina && (
        <div style={estilos.panelSugerencia}>
          <p><strong>{sugerenciaMarina}</strong></p>
          {sugerenciaMarina.includes('Cajón') && (
            <button style={estilos.botonConfirmar}>✅ Confirmar e Imprimir Ticket QR</button>
          )}
        </div>
      )}

      <div style={estilos.gridCajones}>
        {cajones.map(cajon => (
          <div key={cajon.id} style={cajon.estado === 'Libre' ? estilos.cajonLibre : estilos.cajonOcupado}>
            <h4 style={estilos.idCajon}>{cajon.id}</h4>
            <p style={estilos.estadoCajon}>{cajon.estado}</p>
            {cajon.estado === 'Ocupado' && (
              <p style={estilos.detalleCajon}>Placa: {cajon.vehiculo} <br/> Visita a: {cajon.deptoDestino}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const estilos = {
  contenedorEstacionamiento: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', marginTop: '15px' },
  titulo: { color: '#0F172A', margin: '0 0 15px 0' },
  formularioAsignacion: { display: 'flex', gap: '10px', marginBottom: '15px' },
  input: { flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #94A3B8' },
  botonIA: { backgroundColor: '#8B5CF6', color: 'white', padding: '12px 20px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' },
  panelSugerencia: { backgroundColor: '#EDE9FE', padding: '15px', borderRadius: '8px', border: '1px solid #A78BFA', marginBottom: '15px' },
  botonConfirmar: { backgroundColor: '#10B981', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', marginTop: '10px', cursor: 'pointer', fontWeight: 'bold' },
  gridCajones: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '10px' },
  cajonLibre: { backgroundColor: '#F0FDF4', border: '2px solid #4ADE80', borderRadius: '8px', padding: '10px', textAlign: 'center' },
  cajonOcupado: { backgroundColor: '#FEF2F2', border: '2px solid #F87171', borderRadius: '8px', padding: '10px', textAlign: 'center', opacity: 0.8 },
  idCajon: { margin: 0, fontSize: '18px', color: '#1E293B' },
  estadoCajon: { margin: '5px 0', fontSize: '12px', fontWeight: 'bold' },
  detalleCajon: { margin: 0, fontSize: '11px', color: '#475569' }
};