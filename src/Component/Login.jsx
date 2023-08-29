import { Outlet } from "react-router-dom";
import '../Style/login.css';

export let Login=()=>{
    return(
        <div className="login">
            <h2 className="head">Log-In</h2>
            <h4 className="label">Email</h4>
            <input type="mail" />
            <h4 className="label">Password</h4>
            <input type="password" />
            <div className="space"></div>
            <button>LogIn</button>
            <p className="sen" onClick={()=>{
                window.location.href='http://localhost:3000/sign'
            }}>Don't have an account</p>
            <button onClick={()=>{
                window.location.href='http://localhost:3000/sign'
            }} >SignUp</button>
            <Outlet/>
        </div>
    )
}