import React, { createContext, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../Firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const signInByGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const authInfo = {
        user,
        setUser,
        loading,
        signInByGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;