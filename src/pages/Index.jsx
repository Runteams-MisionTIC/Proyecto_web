import "../styles/index.css";
import { useAuth0 } from "@auth0/auth0-react";

function Inicio() {
    const { logout } = useAuth0();
    return (
        <div className="Index">
            <div className="slider">
                <ul>
                    <li><img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/imgPE.png?raw=true" alt="imagen1" /></li>
                    <li><img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/ImgPE2.png?raw=true" alt="imagen2" /></li>
                    <li><img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/imgPE3.png?raw=true" alt="imagen3" /></li>
                    <li><img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/imgPE1.png?raw=true" alt="imagen4" /></li>
                </ul>
            </div>
        </div>
    );
}

export default Inicio;
