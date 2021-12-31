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
import Post from './components/post';
import { useEffect, useState } from 'react';
import Paginate from './components/paginate';
import queryString from 'query-string';
// import { isLoginSelector } from '../redux/selector';



function App() {
  const isLoggin = useSelector(isLoginSelector);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })

  function handlePageChange(newPage){
    console.log('New Page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  useEffect(()=>{
    async function fetchPostList(){
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        
        const responseJSON = await response.json();
        console.log({responseJSON});
        const {data, pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('failed to fetch post list',error.message)
      }
      
    }
    fetchPostList();
  },[filters]);
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
        <Route path="/post">
          <Post posts={postList}/>
          <Paginate pagination={pagination} onChangePage={handlePageChange}/>
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
