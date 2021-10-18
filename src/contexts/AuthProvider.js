import React, { createContext } from 'react';
import useFireBase from '../Components/Hooks/useFireBase';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContexts = useFireBase()
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;