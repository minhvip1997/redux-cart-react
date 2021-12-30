import { useEffect, useState } from 'react';
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
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);
  const handleAddButtonClick = (item)=>{
    console.log(item)
    dispatch(incrementQuantity({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity+1
    }))
    // console.log(item)
  }
  useEffect(()=>{
    let totalprice = 0;
    for (var key of Object.keys(cartList)) {
    
    totalprice+=cartList[key].totalprice
      
    }
    setTotalOrderPrice(totalprice);
  },[cartList])
  

  const handleSubtractButtonClick = (item)=>{
    
    dispatch(decrementQuantity({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity-1
    }))
    // console.log(item)
  }

  // function totalOrderPrice(item){
  //   let a = 0;
    
  // }

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
        
        {Object.keys(cartList).map(function(key, index){
          
          return(
              <tr key={key}>
                <td>{cartList[key].id}</td>
                <td>{cartList[key].name}</td>
                <td>
                <Button onClick={()=>handleSubtractButtonClick(cartList[key])}>
                {" "}
                <RemoveIcon fontSize="small" />
                </Button>
                <span>{cartList[key].quantity}</span>
                <Button onClick={()=>handleAddButtonClick(cartList[key])}>
                {" "}
                <AddIcon fontSize="small" />
              </Button>
                </td>
                <td>{cartList[key].totalprice}</td>
              </tr>
            )
          })}
        <tr>
          <th id='totalprice' colSpan="4">Total Price: {totalOrderPrice}</th>
        </tr>
        </tbody>
</table>
    </div>
  );
}
