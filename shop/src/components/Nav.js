import React from 'react'




import {Link} from 'react-router-dom'



class Nav extends React.Component {
   
    render() { 
        return ( 
            <div>
                <ul>
                    <li><Link to="/Signin">singin</Link></li>
                    <li><Link to="/Signup">singup</Link></li>
                    
                </ul>
            </div>
         );
    }
}
 
export default Nav;