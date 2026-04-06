import { useState, useEffect } from 'react';
import { signIn as amplifySignIn, signOut as amplifySignOut, getCurrentUser as awsGetCurrentUser, fetchAuthSession } from 'aws-amplify/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await awsGetCurrentUser();
      const session = await fetchAuthSession();
      const tenantId = session.tokens?.idToken?.payload['custom:tenant_id'] || 'Elite';
      const role = session.tokens?.accessToken?.payload['cognito:groups']?.[0] || 'Residente';
      
      setUser({ ...currentUser, tenantId, role });
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (username, password) => {
    const { isSignedIn, nextStep } = await amplifySignIn({ username, password });
    if (isSignedIn) await checkUser();
    return { isSignedIn, nextStep };
  };

  const signOut = async () => {
    await amplifySignOut();
    setUser(null);
  };

  const getCurrentUser = () => user;
  const getTenantId = () => user?.tenantId;

  return { user, loading, signIn, signOut, getCurrentUser, getTenantId };
};
