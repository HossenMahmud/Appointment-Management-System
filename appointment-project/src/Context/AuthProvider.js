import React, { createContext, useEffect, useState } from 'react';
export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    useEffect(() => {
        setLoading(true);
        const data = JSON.parse(localStorage.getItem('MyUser'));
        if (data) {
            setUser(data)
        }

        setLoading(false);
    }, []);



    return (
        <authContext.Provider value={{ user, loading, setUser }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
