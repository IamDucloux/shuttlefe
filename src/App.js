import './App.css';
import Navbar from './components/Navbar';
import Vehicle from './components/Vehicle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Reservations from './components/Reservations';
import Concessionaires from './components/Concessionaires';
import Vehicles from './components/Vehicles';
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
        </Navbar>
        <div className="main_content">
          <Switch>
            <Route exact path="/">
              <div className="welcome_card">
                <h1>Bienvenido a Shuttle <span>🚀</span></h1>
                <h3>By Ian Ducloux</h3>
              </div>
            </Route>
            <Route exact path="/reservas">
              <Reservations />
            </Route>
            <Route exact path="/vehiculos">
              <Vehicles />
            </Route>
            <Route exact path="/concesionarios">
              <Concessionaires />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
