import Index from './pages/Index.jsx'
import Ventas from './pages/Ventas.jsx'
import Productos from './pages/Productos.jsx';
import Login from './pages/Login.jsx';
import Credenciales from './pages/Credenciales.jsx';
import Administracion from './pages/AdminUsuarios.jsx';
import './styles/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/Login'>
                  <Login/>
                </Route>
                <Route path='/Credenciales'>
                  <Credenciales/>
                </Route>
                <Route path='/Administracion'>
                  <Administracion/>
                </Route>
                <Route path='/Productos'>
                  <Productos/>
                </Route>
                <Route path='/Ventas'>
                  <Ventas/>
                </Route>
                <Route path='/'>
                  <Index/>
                </Route>
            </Switch>
        </Router> 
    </div>
  );
}

export default App;
