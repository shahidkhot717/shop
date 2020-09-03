import React from 'react'
import homeImage from './images/home.jpg'
import './Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {/* <h1>hello world</h1> */}
                <img src={homeImage} alt="home"/>
                <h1 className="branding">Top 10 mobile shop</h1>
            </div>
         );
    }
}
 
export default Home;