import Index from './pages/Index.jsx';
import Ventas from './pages/Ventas.jsx';
import Productos from './pages/Productos.jsx';
import Login from './pages/Login.jsx';
import Credenciales from './pages/Credenciales.jsx';
import Administracion from './pages/AdminUsuarios.jsx';
import LayoutPrivado from './layouts/LayoutPrivado.jsx';
import LayoutPublico from './layouts/LayoutPublico.jsx';
import RutaPrivada from './components/RutaPrivada.jsx';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <Auth0Provider
      domain="misiontic-runteams.us.auth0.com"
      clientId="hdHkF9NrsJMwxkySfC5h6cXikTAwkJP2"
      redirectUri='http://localhost:3000/Ventas'
      audience='api-runteams-misiontic'
    >
      <div className="App">
        <Router>
          <Switch>
            <Route path={['/Ventas', '/Productos', '/Usuarios']}>
              <LayoutPrivado>
                <Switch>
                  <Route path='/Usuarios'>
                    <RutaPrivada roleList={['Admin']}>
                      <Administracion />
                    </RutaPrivada>
                  </Route>
                  <Route path='/Productos'>
                    <RutaPrivada roleList={['Admin']}>
                      <Productos />
                    </RutaPrivada>
                  </Route>
                  <Route path='/Ventas'>
                    <RutaPrivada roleList={['Admin', 'Vendedor']}>
                      <Ventas />
                    </RutaPrivada>                    
                  </Route>
                </Switch>
              </LayoutPrivado>
            </Route>
            <Route path={['/']}>
              <LayoutPublico>
                <Switch>
                  <Route path='/'>
                    <Index />
                  </Route>
                </Switch>
              </LayoutPublico>
            </Route>
          </Switch>
        </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;
