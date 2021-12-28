import './login.css'

export default function Login(){

  
  
    return (
      <div>
         
             <div className="container">
             <form action="/action_page.php" method="post">
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                        
                    <button type="submit">Login</button>
                    <label>
                    <input type="checkbox"/>Remember Login
                    </label>
                </div>
                </form>
             </div>
      </div>
    );
  }