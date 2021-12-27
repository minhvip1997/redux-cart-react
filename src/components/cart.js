import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";



export default function Carts() {

  const dispatch = useDispatch();


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
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>
            <Button>
            {" "}
            <RemoveIcon fontSize="small" />
            </Button>
            Germany
            <Button>
            {" "}
            <AddIcon fontSize="small" />
          </Button>
            </td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>
            <Button>
            {" "}
            <RemoveIcon fontSize="small" />
            </Button>
            Germany
            <Button>
            {" "}
            <AddIcon fontSize="small" />
            </Button>
            </td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>
            <Button>
            {" "}
            <RemoveIcon fontSize="small" />
            </Button>
            Germany
            <Button>
            {" "}
            <AddIcon fontSize="small" />
            </Button>
            </td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>
            <Button>
            {" "}
            <RemoveIcon fontSize="small" />
            </Button>
            Germany
            <Button>
            {" "}
            <AddIcon fontSize="small" />
            </Button>
            </td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>
            <Button>
            {" "}
            <RemoveIcon fontSize="small" />
            </Button>
            Germany
            <Button>
            {" "}
            <AddIcon fontSize="small" />
            </Button>
            </td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>
            <Button>
            {" "}
            <RemoveIcon fontSize="small" />
            </Button>
            Germany
            <Button>
            {" "}
            <AddIcon fontSize="small" />
            </Button>
            </td>
            <td>Germany</td>
        </tr>
        <tr>
          <th id='totalprice' colSpan="4">Total Price:</th>
        </tr>
        </tbody>
</table>
    </div>
  );
}
