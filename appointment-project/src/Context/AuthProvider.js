import React, { createContext, useEffect, useState } from 'react';
export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({})
    useEffect(() => {
        setLoading(true);
        // const user = JSON.parse(localStorage.getItem('MyUser'));
        const data = window.localStorage.getItem('MyUser');
        if (data !== null) {
            setUser(JSON.parse(data))
        }

        setLoading(false);
    }, []);



    return (
        <authContext.Provider value={{ user, loading }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
