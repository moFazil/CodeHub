import React from 'react';
import '../Style/htmlstyle.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Htmlunits=()=>{

    return(
        <div className="htmlunits">
         <Link to={`/html/int`}><h4>Html Intoduction</h4></Link>
         <Link to={`/html/form`}><h4>Html Forms</h4></Link>
         <Link to={`/html/table`}><h4>Html Tables</h4></Link>
         <Link to={`/html/list`}><h4>Html List</h4></Link>
         <Link to={`/html/graph`}><h4>Html Graphics</h4></Link>
         <Link to={`/html/htquiz`}><h4>Html Quiz</h4></Link>
         
         <Outlet/>
        </div>
    )
}