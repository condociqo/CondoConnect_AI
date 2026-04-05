// Diccionario Dinámico de CondoConnect AI para las 7 Verticales
export const obtenerTextosPorVertical = (tipoVertical) => {
    const diccionarios = {
        "Condominio": { usuario: "Residente", visitante: "Visita", unidad: "Departamento" },
        "Corporativo": { usuario: "Empleado", visitante: "Proveedor/Visita", unidad: "Oficina" },
        "Plaza Comercial": { usuario: "Locatario", visitante: "Cliente/Proveedor", unidad: "Local" },
        "Hotel": { usuario: "Huésped", visitante: "Visita Externa", unidad: "Habitación" },
        "Parque Industrial": { usuario: "Operador", visitante: "Transportista/Carga", unidad: "Nave Industrial" },
        "Locales Comerciales": { usuario: "Arrendatario", visitante: "Cliente", unidad: "Local" },
        "Estacionamiento": { usuario: "Pensión", visitante: "Vehículo Transitorio", unidad: "Cajón" }
    };

    // Si por alguna razón no encuentra la vertical, usa un lenguaje neutral
    return diccionarios[tipoVertical] || { usuario: "Usuario", visitante: "Visitante", unidad: "Espacio" };
};