import {FaTerminal} from 'react-icons/fa';
import React from 'react';
import '../Style/Style.css';
import { Link } from 'react-router-dom';


const Topbar=()=>{
   return(
   
   <div className="topbar"> 
   <div className="rightbar">
    <FaTerminal className="logo"/>
      <Link to={`html`} > <h3 className='course'>HTML</h3></Link> 
      <Link to={`css`}> <h3 className='course'>CSS</h3></Link>
   </div>
   <h2 className="title" onClick={()=>{
      window.location.href='http://localhost:3000/'
   }}>Code Hub</h2>
   <div className="leftbar">
   <Link to={`log`} > <h3 className='course'>LogIn</h3></Link> 
      <Link to={`sign`}> <h3 className='course'>SignIn</h3></Link>
   </div>
   </div>
   
   );
}
export default Topbar;