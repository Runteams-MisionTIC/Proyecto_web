import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const RutaPrivada = ({ children }) => {
    const { user, isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        //No sé qué es esto
        const fetchAuth0token = async () => {
            const accesToken = await getAccessTokenSilently({
                audience: 'api-runteams-misiontic'
            });
            localStorage.setItem('token', accesToken);
        }
        if (isAuthenticated) {
            fetchAuth0token();
        }

    }, [isAuthenticated, getAccessTokenSilently])

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

