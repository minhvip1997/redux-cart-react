import React, {useState} from "react";
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../redux/action';
import { userSelector } from "../redux/selector";

const Logout = () =>{

const dispatch = useDispatch();
const userlogin = useSelector(userSelector);

const handleClickLogout = (e)=>{
    e.preventDefault();
    dispatch(logout())
}
    return (
        <div>
            <h1>
                Welcome <span className="username">{userlogin.userName}</span>
                <button onClick={(e)=> handleClickLogout(e)}>Logout</button>
            </h1>
        </div>
    )
}

export default Logout;