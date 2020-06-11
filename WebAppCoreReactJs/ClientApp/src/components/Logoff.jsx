import React, { useEffect } from "react";
import { useTokenHandle } from "../Context";
import { useToken } from "../Context";

const Logoff = ({ history }) => {
    const [, isToken] = useToken();
    const [, handleRemoveToken] = useTokenHandle();
    const handleLogoff = () => {
        handleRemoveToken();
        history.push('/login');
    }
    useEffect(() => {
        if (!isToken) history.push('/login');
    });
    return (
        <div>
            <h2>Deseja sair?</h2>
            <button className="btn btn-info" onClick={handleLogoff}>Sair</button>
        </div>
    );
};

export default Logoff;
