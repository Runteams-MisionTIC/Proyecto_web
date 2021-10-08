import Index from './pages/Index.jsx'
import Ventas from './pages/Ventas.jsx'
import './styles/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
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
