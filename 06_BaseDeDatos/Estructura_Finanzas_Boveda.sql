-- Creación de la Base de Datos Financiera CondoConnect AI (Zero Trust)

CREATE TABLE Propiedades (
    id_propiedad VARCHAR(50) PRIMARY KEY,
    nombre_oficial VARCHAR(150) NOT NULL,
    rfc_administracion VARCHAR(20) NOT NULL,
    fondo_mantenimiento_actual DECIMAL(15, 2) DEFAULT 0.00
);

CREATE TABLE Boveda_Monetizacion (
    id_boveda SERIAL PRIMARY KEY,
    id_propiedad VARCHAR(50) REFERENCES Propiedades(id_propiedad),
    saldo_amazon_logistics DECIMAL(15, 2) DEFAULT 0.00,
    saldo_mercado_libre DECIMAL(15, 2) DEFAULT 0.00,
    saldo_fast_track DECIMAL(15, 2) DEFAULT 0.00,
    ultima_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Transacciones_Aprobadas (
    id_transaccion VARCHAR(100) PRIMARY KEY,
    id_propiedad VARCHAR(50) REFERENCES Propiedades(id_propiedad),
    monto DECIMAL(15, 2) NOT NULL,
    concepto TEXT NOT NULL,
    tipo_movimiento VARCHAR(20) CHECK (tipo_movimiento IN ('INGRESO', 'EGRESO_APROBADO')),
    firma_biometrica_hash VARCHAR(256) NOT NULL, -- El hash del rostro del Directivo
    fecha_ejecucion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para búsquedas rápidas en auditorías
CREATE INDEX idx_transacciones_propiedad ON Transacciones_Aprobadas(id_propiedad);
CREATE INDEX idx_fecha_transaccion ON Transacciones_Aprobadas(fecha_ejecucion);