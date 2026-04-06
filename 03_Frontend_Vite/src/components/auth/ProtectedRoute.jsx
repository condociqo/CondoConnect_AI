import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        window.location.href = '/login'; 
      } else if (allowedRoles && !allowedRoles.includes(user.role)) {
        window.location.href = '/unauthorized';
      }
    }
  }, [user, loading, allowedRoles]);

  if (loading) return <div style={{height: '100vh', display:'flex', justifyContent:'center', alignItems:'center', background:'#020408', color:'#00E5FF'}}>Verificando sesión cifrada...</div>;
  if (!user || (allowedRoles && !allowedRoles.includes(user.role))) return null;

  return <>{children}</>;
}
