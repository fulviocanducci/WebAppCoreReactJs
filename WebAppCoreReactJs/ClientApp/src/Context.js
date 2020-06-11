import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

const Provider = ({ children }) => {
    const [token, setToken] = useState(() => {
        return window.localStorage.getItem("@token");
    });
    useEffect(() => {
        window.localStorage.setItem("@token", JSON.stringify(token));
    }, [token]);
    const handleSetToken = (value) => setToken(value);
    const handleRemoveToken = () => setToken(null);
    return (
        <Context.Provider value={{ token, handleSetToken, handleRemoveToken }}>
        {children}
        </Context.Provider>
    );
}

export const useToken = () => {
    const context = useContext(Context);
    const { token } = context;
    const isToken = token !== null;
    return [token, isToken];
}

export const useTokenHandle = () => {
    const context = useContext(Context);
    const { handleSetToken, handleRemoveToken } = context;    
    return [handleSetToken, handleRemoveToken];
}

export default Provider;