import { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { allProductsSelector } from '../redux/selector';
import "./Product.css";
import { addProduct } from '../redux/action';



export default function Products() {

  const dispatch = useDispatch();
  const productList = useSelector(allProductsSelector);

  const handleAddButtonClick = (item)=>{
    dispatch(addProduct({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      totalprice: item.price * 1
    }))
  }
  return (
    <div>
        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
        
        {productList.length>0 && productList.map((item,index)=>{
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                        <button onClick={()=>handleAddButtonClick(item)}>Add</button>
                    </td>
                </tr>
            )
        })
        }
        </tbody>
</table>
    </div>
  );
}
