import { ReactNode, createContext, useContext } from 'react'
import useFirebaseAuth from '@hooks/useAuth';
import { UserCredential } from 'firebase/auth';
import AppLogo from '/public/img/logo-no-text.png';
import { AuthContextType } from '@lib/types';

const authUserContext = createContext<AuthContextType>({
    authUser: null,
    loading: true,
    onSignInWithGoogle: async () => { },
    onSignInWithEmailAndPassword: async (email: string, password: string): Promise<UserCredential> => ({} as UserCredential),
    onCreateUserWithEmailAndPassword: async (email: string, password: string): Promise<UserCredential> => ({} as UserCredential),
    onSignOut: async () => { }
});

const appContext = createContext({
    name: 'IPTVEEC',
    logo: AppLogo,
    version: '1.0',
    lang: 'en',
});

export function AuthUserProvider({ children }: { children: ReactNode }) {
    const auth = useFirebaseAuth();
    return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
export const useApp = () => useContext(appContext);