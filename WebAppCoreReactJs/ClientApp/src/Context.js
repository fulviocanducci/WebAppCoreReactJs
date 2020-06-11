import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

const Provider = ({ children }) => {
    const [token, setToken] = useState(() => {
        const _token = window.localStorage.getItem("@token");
        return _token && _token.length > 0 ? _token : ""; 
    });
    useEffect(() => {
        window.localStorage.setItem("@token", token);
    }, [token]);
    const handleSetToken = (value) => setToken(value);
    const handleRemoveToken = () => setToken("");
    return (
        <Context.Provider value={{ token, handleSetToken, handleRemoveToken }}>
        {children}
        </Context.Provider>
    );
}

export const useToken = () => {
    const context = useContext(Context);
    const { token } = context;
    const isToken = token && token.length > 0;
    return [token, isToken];
}

export const useTokenHandle = () => {
    const context = useContext(Context);
    const { handleSetToken, handleRemoveToken } = context;    
    return [handleSetToken, handleRemoveToken];
}

export default Provider;