import React, { useState } from 'react';

export default function MigracionHardwareIoT() {
  const [fase, setFase] = useState('inicio'); // inicio, escaneando, analisis, migracion, exito
  const [dispositivosDetectados, setDispositivosDetectados] = useState([]);

  const iniciarEscaneoIP = () => {
    setFase('escaneando');
    setTimeout(() => {
      setDispositivosDetectados([
        { ip: '192.168.1.100', marca: 'Hikvision NVR', modelo: 'DS-7608', estado: 'Firmware Desactualizado', accion: 'Actualizar y Enlazar' },
        { ip: '192.168.1.150', marca: 'Kantech EntraPass', modelo: 'KT-400', estado: 'Base de datos Local Activa', accion: 'Clonar DB y Tomar Control' },
        { ip: '192.168.1.200', marca: 'Bosch Access', modelo: 'AMC2', estado: 'Falla en Batería', accion: 'Reportar Falla Física' }
      ]);
      setFase('analisis');
    }, 4000);
  };

  const ejecutarMigracion = () => {
    setFase('migracion');
    setTimeout(() => setFase('exito'), 5000);
  };

  return (
    <div style={estilos.contenedorIoT}>
      <div style={estilos.headerIoT}>
        <h3 style={estilos.titulo}>🔌 Enlace IoT y Migración de Hardware Legacy</h3>
        <p style={estilos.descripcion}>Marina IA buscará paneles Kantech, Bosch, Hikvision y Johnson Controls en la red local para absorberlos.</p>
      </div>

      {fase === 'inicio' && (
        <div style={estilos.panelCentro}>
          <div style={estilos.radar}>📡</div>
          <button onClick={iniciarEscaneoIP} style={estilos.botonEscanear}>
            Iniciar Barrido de Red Local (IP Scan)
          </button>
        </div>
      )}

      {fase === 'escaneando' && (
        <div style={estilos.panelCentro}>
          <div style={estilos.loaderTarget}></div>
          <p style={estilos.textoCargando}>Marina está interrogando la red local por protocolos TCP/IP, ONVIF y Wiegand...</p>
        </div>
      )}

      {fase === 'analisis' && (
        <div style={estilos.panelResultados}>
          <h4 style={estilos.subtitulo}>Hardware Detectado</h4>
          <table style={estilos.tablaIoT}>
            <thead>
              <tr style={estilos.filaCabecera}>
                <th>IP / MAC</th>
                <th>Fabricante</th>
                <th>Diagnóstico IA</th>
                <th>Estrategia de Migración</th>
              </tr>
            </thead>
            <tbody>
              {dispositivosDetectados.map((disp, idx) => (
                <tr key={idx} style={estilos.filaDatos}>
                  <td><code>{disp.ip}</code></td>
                  <td><strong>{disp.marca}</strong> ({disp.modelo})</td>
                  <td style={{color: disp.estado.includes('Falla') ? 'red' : '#F59E0B'}}>{disp.estado}</td>
                  <td>{disp.accion}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={estilos.cajaAdvertencia}>
            <p><strong>⚠️ Paso Crítico:</strong> Marina creará un túnel seguro (AWS IoT Greengrass), extraerá los usuarios de Kantech/Bosch hacia CondoConnect y actualizará el firmware de Hikvision. Las licencias requeridas se descontarán del saldo de monetización.</p>
            <button onClick={ejecutarMigracion} style={estilos.botonMigrar}>
              🚀 Autorizar Adquisición Hostil (Takeover) y Migrar DB
            </button>
          </div>
        </div>
      )}

      {fase === 'migracion' && (
        <div style={estilos.panelTerminal}>
          <p>root@marina-aws-iot:~# Extracting .bak from KT-400...</p>
          <p>root@marina-aws-iot:~# 450 users found. Translating to DynamoDB Schema...</p>
          <p>root@marina-aws-iot:~# Patching Hikvision firmware CVE-2023...</p>
          <p>root@marina-aws-iot:~# Provisioning AWS API Gateway for Remote Open...</p>
          <div style={estilos.barraProgreso}><div style={estilos.progresoAnimado}></div></div>
        </div>
      )}

      {fase === 'exito' && (
        <div style={estilos.panelExito}>