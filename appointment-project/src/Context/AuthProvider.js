import React, { createContext, useEffect, useState } from 'react';
export const authContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('MyUser'));
        if (user) {
            setUser(user);
        }
    }, []);


    return (
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
