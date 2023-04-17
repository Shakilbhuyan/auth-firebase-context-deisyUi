import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


export const authContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    const authInfo = {
        user,
    }
    return (
        <authContext.Provider value = {authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProviders;