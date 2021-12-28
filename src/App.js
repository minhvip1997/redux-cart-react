import logo from './logo.svg';
import './App.css';
import Carts from './components/cart';
import NavBars from './components/Navbar';
import Home from './components/home';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Login from './components/login';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBars/>
      <header className="App-header">
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/carts">
        <Carts />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
