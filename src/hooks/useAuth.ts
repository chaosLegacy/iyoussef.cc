import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, User, UserInfo } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { FIREBASE_AUTH } from '@utils/firebase';
import { useUser } from './useUser';

const formatAuthUser = (user: UserInfo) => ({
    uid: user.uid,
    email: user.email
});

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { createUser} = useUser();

    const clear = () => {
        setAuthUser(null);
        setLoading(false);
    };

    const onSignInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(FIREBASE_AUTH, provider);
            const user = result.user;
            const userData = {
                uid: user.uid,
                email: user.email,
                firstName: user.displayName ? user.displayName.split(' ')[0]: '',
                lastName: user.displayName ? user.displayName.split(' ')[1]: '',
                photoURL: user.photoURL,
                displayName: user.displayName,
                providerId: user.providerId,
            };
            createUser(userData);
            console.log('Successfully signed in with Google:', user);
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    }

    const onSignInWithEmailAndPassword = (email: string, password: string) =>
        signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
        

    const onCreateUserWithEmailAndPassword = (email: string, password: string) =>
        createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        

    const onSignOut = () =>
        signOut(FIREBASE_AUTH).then(clear);

    
    const authStateChanged = async (authState: User) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return;
        }

        setLoading(true)
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false);
    };

    // listen for Firebase state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        loading,
        onSignInWithGoogle,
        onSignInWithEmailAndPassword,
        onCreateUserWithEmailAndPassword,
        onSignOut
    };
}