import { Outlet } from "react-router-dom";
import '../Style/signin.css';

export let Signin= ()=>{
    return(
        <div className="acc">
            <div className="headsign">
            <h2 className="signhead">Sign-In</h2>
            <h4 className="label" >First Name</h4>
            <input type="text"/>
            <h4 className="label">Last Name</h4>
            <input type="text" />
            <h4 className="label">Mail Id</h4>
            <input type="mail"/>
            <h4 className="label">Password</h4>
            <input type="password"/>
            <button>SignIn</button>   
            </div>          
        <Outlet/>
        </div>
    )
}