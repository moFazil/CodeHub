import '../Style/cssstyle.css'; 
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Cssunits=()=>{
    return( 
        <div className="cssunits">
        <Link to={`/css/intro`}><h4>Css Introduction</h4></Link> 
        <Link to={`/css/flex`}><h4>Css Flex</h4></Link>
        <Link to={`/css/grid`}><h4>Css Grid</h4></Link>
        <Link to={`/css/anime`}><h4>Css Animation</h4></Link>
        <Link to={`/css/rwd`}><h4>Css RWD</h4></Link>
        <Link to={`/css/quiz`}><h4>Css Quiz</h4></Link>
       <Outlet/>
    </div>
    
    )
}