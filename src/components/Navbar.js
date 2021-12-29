
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch,useSelector  } from 'react-redux';
import { isLoginSelector } from "../redux/selector";
import "./NavBars.css";
import { logout } from '../redux/action';
import {
    Link, NavLink
} from "react-router-dom";
import { allItemsCountSelector,userSelector } from "../redux/selector";

export default function NavBars(){
  const dispatch = useDispatch();
  const itemCount = useSelector(allItemsCountSelector);
  const isLoggin = useSelector(isLoginSelector);
  const userlogin = useSelector(userSelector);

  const handleOnCLickLogOut = (e) =>{
    e.preventDefault();
    dispatch(logout())
  }
  console.log(isLoggin)
    if(isLoggin == false){
      return (
        <div className="topnav">
            {/* <NavLink to="/" activeClassName="active" exact={true}>
                Home
            </NavLink> */}
            <NavLink to="login" activeClassName="active">
                Login
            </NavLink>
        </div>
      );
    }else{
      return (
    <div className="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
            Home
        </NavLink>
        <NavLink to="products" activeClassName="active" >
            Product
        </NavLink>
        {/* <NavLink to="login" activeClassName="active">
            Login
        </NavLink> */}
        <NavLink to="logout" activeClassName="active" onClick={(e)=>handleOnCLickLogOut(e)}>
            Logout
        </NavLink>
        <div className="userLogin">
          Wellcome to <span>{userlogin.userName}</span>
        </div>
        <NavLink to="/carts" activeClassName="active" id="cart" className="cis-cart">
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />
        </Badge>
        </NavLink>
    </div>
  );
    }
  // return (
  //   <div className="topnav">
  //       <NavLink to="/" activeClassName="active" exact={true}>
  //           Home
  //       </NavLink>
  //       <NavLink to="products" activeClassName="active">
  //           Product
  //       </NavLink>
  //       <NavLink to="login" activeClassName="active">
  //           Login
  //       </NavLink>
  //       <NavLink to="logout" activeClassName="active">
  //           Logout
  //       </NavLink>
  //       <NavLink to="/carts" activeClassName="active" id="cart" className="cis-cart">
  //       <Badge color="secondary" badgeContent={itemCount}>
  //         <ShoppingCartIcon />
  //       </Badge>
  //       </NavLink>
  //   </div>
  // );
}