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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
        </Navbar>
        <Switch>
          <Route exact path="/reservas">
            <Reservations/>
          </Route>
          <Route exact path="/vehiculos">
            <Vehicles/>
          </Route>
          <Route exact path="/concesionarios">
            <Concessionaires/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
