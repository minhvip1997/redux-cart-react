import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { allCartsSelector, TotalCartPriceSelector } from '../redux/selector';
import { decrementQuantity, incrementQuantity } from '../redux/action';



export default function Carts() {

  const dispatch = useDispatch();
  const cartList = useSelector(allCartsSelector);
  const TotalCartPrice = useSelector(TotalCartPriceSelector);
  const handleAddButtonClick = (item)=>{
    dispatch(incrementQuantity({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity+1
    }))
    // console.log(item)
  }

  const handleSubtractButtonClick = (item)=>{
    // if(item.quantity <1 ){
    //   item.quantity =
    // }
    dispatch(decrementQuantity({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity-1
    }))
    // console.log(item)
  }

  return (
    <div>
        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Total Unit Price</th>
            </tr>
        </thead>
        <tbody>
        {cartList.length>0  && cartList.map((item,index)=>{
            return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                <Button onClick={()=>handleSubtractButtonClick(item)}>
                {" "}
                <RemoveIcon fontSize="small" />
                </Button>
                <span>{item.quantity}</span>
                <Button onClick={()=>handleAddButtonClick(item)}>
                {" "}
                <AddIcon fontSize="small" />
              </Button>
                </td>
                <td>{item.totalprice}</td>
              </tr>
            )
        })}
        <tr>
          <th id='totalprice' colSpan="4">Total Price: {TotalCartPrice}</th>
        </tr>
        </tbody>
</table>
    </div>
  );
}
