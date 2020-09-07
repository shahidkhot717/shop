import React from 'react'
import Fieldset, { withFieldset, withFullName } from 'react-fieldset';
import './Form.css'

class Signin extends React.Component {
    
    render() { 
        return ( 
            <div className="forms">
                <h1>singin</h1>
                <form>
                    <fieldset>
                    <legend>Login</legend>
                    <div>
                    <label>Name:</label>
                    </div>
                    <div>
                    <input type="text" />
                    </div>
                    <div>
                    <label>Mobile Number:</label>
                    </div>
                    <div>
                    <input type="number" />
                    </div>
                    <div>
                        <button className="btn btn-success">submit</button>
                    </div>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default Signin;