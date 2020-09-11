import React from 'react'
// import Fieldset, { withFieldset, withFullName } from 'react-fieldset';
import './Form.css'

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            mnumber : ''
        }
    }

    handleusername = (event) =>{
        this.setState({
            username:event.target.value
        })
    }

    handleMnumber = (event) => {
        this.setState({
            mnumber : event.target.value
        })
    }

    handleSubmit = (event) =>{
        // alert(`${this.state.username} ${this.state.mnumber}`)
        event.preventDefault()
    

    const data = { username:this.state.username, mnumber:this.state.mnumber }

    fetch('/api/signin', { method: 'POST', 

    // body: JSON.stringify(data),
     // data can be `string` or {object}!
     data: {
        username: this.state.username,
        mnumber: this.state.mnumber
      },
    headers:{ 
        "Accept" : 'application/json',
        'Content-Type': 'application/json' } })

    .then(res => res.json())

    .catch(error => console.error('Error:', error))

    .then(response => console.log('Success:', response));
   }


    render() { 
        return ( 
            <div className="forms">
                <h1>singin</h1>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                    <legend>Login</legend>
                    <div>
                    <label>Name:</label>
                    </div>
                    <div>
                    <input type="text" value={this.state.value} onChange={this.handleusername} />
                    </div>
                    <div>
                    <label>Mobile Number:</label>
                    </div>
                    <div>
                    <input type="number" value={this.state.value} onChange={this.handleMnumber}/>
                    </div>
                    <div>
                        {/* <input type="submit" onSubmit={this.handleSubmit} /> */}
                        <button className="btn btn-success" >submit</button>
                    </div>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default Signin;