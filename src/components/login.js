import './login.css'
import React, {useState} from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { login_error, login_success } from '../redux/action';
import { allUserSelector } from '../redux/selector';
import { ActionTypes } from '../constant/index';
import Message from '../constant/message';
import { isRememberSelector } from '../redux/selector';

const Login = ()=>{
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(allUserSelector);
  const remember = useSelector(isRememberSelector);
  const [checked, setChecked] = useState(true);

  const handleSubmit = (e)=>{
    e.preventDefault();
    let checkuser = {}
    if(remember.userName){
       checkuser = users.find(item=> item.userName === remember.userName && item.password === remember.password)
    }else{
       checkuser = users.find(item=> item.userName === userName && item.password === password)
    }
    // let checkuser = users.find(item=> item.userName === userName && item.password === password)
    if(checkuser){
      if(checked){
        console.log(remember)
        dispatch(login_success({
          userLogin: checkuser,
          message: Message.LOGIN_SUCCESS,
          remember: checked
        }))
      }else{
        dispatch(login_success({
          userLogin: checkuser,
          message: Message.LOGIN_SUCCESS,
        }))
      }
      // dispatch(login_success({
      //   userLogin: checkuser,
      //   message: Message.LOGIN_SUCCESS,
      //   remember: checked
      // }))
    }else{
      dispatch(login_error({
        userLogin: checkuser,
        message: Message.LOGIN_ERROR
      }))
    }
  }

  const handleOnChangeUserName = (e)=>{
    setUserName(e.target.value)
  }

  const handleOnChangePassword = (e) =>{
    setPassword(e.target.value)
  }
  
  const onChangeChecked = (data)=>{
    setChecked(data);
    console.log(data);
  }

  return (
    <div>
       
           <div className="container">
           <form  className='loginform' onSubmit={(e) => handleSubmit(e)}>
              <div className="container">
                  <label htmlFor="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" value={remember ? remember.userName : userName} onChange={(e)=>handleOnChangeUserName(e)} name="uname" required/>

                  <label htmlFor="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" value={remember ? remember.password : password} onChange={(e)=>handleOnChangePassword(e)} name="psw" required/>
                      
                  <button type="submit">Login</button>
                  <label>
                  <input type="checkbox" defaultChecked={checked} onChange={() => onChangeChecked(!checked)}/>Remember Login
                  </label>
              </div>
              </form>
           </div>
    </div>
  );
}

export default Login;