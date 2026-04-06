import { fetchAuthSession } from 'aws-amplify/auth';

// URL dinámica inyectada desde AWS CloudShell
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://5cwfxs3hwl.execute-api.us-east-1.amazonaws.com/prod';

export interface BitacoraPayload {
  action: 'MULTA' | 'ENTREGA_TURNO' | 'INCIDENCIA';
  component: string;
  details: Record<string, any>;
}

export const signAndSend = async (payload: BitacoraPayload) => {
  const session = await fetchAuthSession();
  const token = session.tokens?.idToken?.toString();

  if (!token) throw new Error("Acceso denegado: Se requiere autenticación criptográfica.");

  const response = await fetch(\\/api/bitacora\, {
    method: 'POST',
    headers: {
      'Authorization': \Bearer \\,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Fallo al sellar en la bitácora inmutable.");
  }

  return await response.json();
};
