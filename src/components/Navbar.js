
import { useDispatch } from "react-redux";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
// import "./NavBars.css";
import {
    Link, NavLink
} from "react-router-dom";
import { allItemsCountSelector } from "../redux/selector";
import { useSelector  } from 'react-redux';

export default function NavBars(){
  const dispatch = useDispatch();
  const itemCount = useSelector(allItemsCountSelector);

  return (
    <div className="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
            Home
        </NavLink>
        <NavLink to="products" activeClassName="active">
            Product
        </NavLink>
        <NavLink to="/carts" activeClassName="active" id="cart" className="cis-cart">
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />
        </Badge>
        </NavLink>
    </div>
  );
}