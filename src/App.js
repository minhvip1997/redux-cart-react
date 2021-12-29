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
import Logout from './components/logout';
import { useDispatch,useSelector  } from 'react-redux';
import { isLoginSelector } from "../src/redux/selector";
import { Redirect } from 'react-router-dom';
// import { isLoginSelector } from '../redux/selector';



function App() {
  const isLoggin = useSelector(isLoginSelector);
  console.log(isLoggin)
  if(isLoggin == false){
    return (
      <Router>
      <div className="App">
      {/* <NavBars/> */}
        <header className="App-header">

        
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route path="/">
          <Login />
        </Route>
        <Redirect to="/login" />

        </header>
      </div>
      </Router>
    );
  }else{
    return (
      <Router>
      <div className="App">
      <NavBars/>
        <header className="App-header">
        <Switch>
        <Route exact path="/login">
        <Redirect to="/" />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/carts">
          <Carts />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
        </header>
      </div>
      </Router>
    );
  }
  // return (
  //   <Router>
  //   <div className="App">
  //   <NavBars/>
  //     <header className="App-header">
  //     <Switch>
  //     <Route exact path="/">
  //       <Home />
  //     </Route>
  //     <Route path="/products">
  //       <Products />
  //     </Route>
  //     <Route path="/carts">
  //       <Carts />
  //     </Route>
  //     <Route path="/login">
  //       <Login />
  //     </Route>
  //     <Route path="/logout">
  //       <Logout />
  //     </Route>
  //   </Switch>
  //     </header>
  //   </div>
  //   </Router>
  // );
}

export default App;
