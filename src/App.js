import './App.css';
import Navbar from './components/Navbar';
import Vehicle from './components/Vehicle';
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
        <Navbar>
        </Navbar>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
