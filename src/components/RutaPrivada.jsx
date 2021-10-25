import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const RutaPrivada = ({ children }) => {
    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return loginWithRedirect();
    }

    return <>{children}</>;

    // return isAuthenticated ? (<>{children}</>) : (<div>NO ESTAS AUTORIZADO</div>)

}

export default RutaPrivada

