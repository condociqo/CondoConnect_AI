import React, { useState } from 'react';

export default function HubReclutamiento360() {
  const [faseActiva, setFaseActiva] = useState('Marketing');

  const publicarVacante = () => {
    alert("📢 Vacante publicada automáticamente en Facebook Jobs, Instagram y LinkedIn usando el presupuesto de Marketing de la empresa.");
  };

  const capturarBiometria = () => {
    alert("📷 Registrando rostro en AWS Rekognition. El elemento ahora existe en la base de datos global de CondoConnect y puede ser asignado a cualquier condominio.");
  };

  return (
    <div style={estilos.contenedorHub}>
      <header style={estilos.headerHub}>
        <h3 style={estilos.titulo}>🎯 Hub 360: Marketing, Reclutamiento y Alta Biométrica</h3>
        <p style={estilos.subtitulo}>Desde el anuncio en redes hasta la caseta de vigilancia.</p>
      </header>

      <div style={estilos.navegacionFases}>
        <button onClick={() => setFaseActiva('Marketing')} style={faseActiva === 'Marketing' ? estilos.tabActivo : estilos.tab}>1. Atracción</button>
        <button onClick={() => setFaseActiva('Seleccion')} style={faseActiva === 'Seleccion' ? estilos.tabActivo : estilos.tab}>2. Pruebas y Selección</button>
        <button onClick={() => setFaseActiva('Alta')} style={faseActiva === 'Alta' ? estilos.tabActivo : estilos.tab}>3. Alta Biométrica</button>
      </div>

      <div style={estilos.panelContenido}>
        {faseActiva === 'Marketing' && (
          <div>
            <h4>Campaña de Atracción de Talento (Redes Sociales)</h4>
            <input type="text" placeholder="Puesto: Guardia Intramuros - Zona Sur" style={estilos.input} />
            <input type="number" placeholder="Presupuesto Pauta (Ads): $500 MXN" style={estilos.input} />
            <button onClick={publicarVacante} style={estilos.botonMeta}>🚀 Lanzar Campaña en Meta/LinkedIn</button>
          </div>
        )}

        {faseActiva === 'Seleccion' && (
          <div>
            <h4>Pipeline de Candidatos</h4>
            <div style={estilos.tarjetaCandidato}>
              <p><strong>Candidato:</strong> Luis Alberto Gómez (Desde Facebook)</p>
              <p><strong>Docs:</strong> Completos | <strong>Psicométrico Marina:</strong> Apto (90%)</p>
              <button style={estilos.botonAprobar}>Aprobar para Contratación</button>
            </div>
          </div>
        )}

        {faseActiva === 'Alta' && (
          <div>
            <h4>Alta en Base de Datos CondoConnect (Global)</h4>
            <p>Es indispensable crear la firma facial del elemento para que pueda operar el sistema de paquetería y accesos.</p>
            <div style={estilos.cajaBiometria}>
              <div style={estilos.simuladorCamara}>[ CÁMARA ACTIVA ]</div>
              <button onClick={capturarBiometria} style={estilos.botonBio}>
                👁️ Escanear Rostro y Enrolar en AWS
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const estilos = {
  contenedorHub: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', fontFamily: 'sans-serif', marginTop: '20px' },
  headerHub: { borderBottom: '1px solid #F1F5F9', paddingBottom: '15px', marginBottom: '15px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '13px', margin: '5px 0 0 0' },
  navegacionFases: { display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '2px solid #F1F5F9' },
  tabActivo: { padding: '10px 15px', backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderBottom: 'none', borderRadius: '5px 5px 0 0', fontWeight: 'bold', color: '#0284C7', cursor: 'pointer' },
  tab: { padding: '10px 15px', backgroundColor: 'transparent', border: 'none', color: '#64748B', cursor: 'pointer' },
  panelContenido: { backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  input: { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #CBD5E1' },
  botonMeta: { backgroundColor: '#1877F2', color: 'white', border: 'none', padding: '12px', width: '100%', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' },
  tarjetaCandidato: { backgroundColor: 'white', padding: '15px', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '10px' },
  botonAprobar: { backgroundColor: '#10B981', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' },
  cajaBiometria: { textAlign: 'center', marginTop: '15px' },
  simuladorCamara: { height: '150px', backgroundColor: '#1E293B', color: '#38BDF8', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', marginBottom: '10px' },
  botonBio: { backgroundColor: '#0F172A', color: 'white', border: 'none', padding: '12px', width: '100%', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }
};