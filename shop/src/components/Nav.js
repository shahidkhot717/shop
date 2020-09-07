import React from 'react';
import './Nav.css';



import {Link} from 'react-router-dom'



class Nav extends React.Component {
   
    render() { 
        return ( 
            <div className="nav">
                <ul>
                    <li className="logo"><Link to="/" id="lis">TOP 10</Link></li>
                    <li className="links"><Link to="/Signin" id="lis">singin</Link></li>
                    <li className="links"><Link to="/Signup" id="lis">singup</Link></li>
                    
                </ul>
            </div>
         );
    }
}
 
export default Nav;