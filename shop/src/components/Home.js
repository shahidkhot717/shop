import React from 'react'
import homeImage from './images/home.jpg'
import './Home.css'
// import Nav from './Nav'
// import HomeScreen from './HomeScreen'
// import Footer from './Footer'
import Item from './Items'

class Home extends React.Component {
    
    render() { 
        return ( 
            <div>
                {/* <h1>hello world</h1> */}
                
                <img src={homeImage} alt="home"/>
                <h1 className="branding">Top 10 mobile shop</h1>
                <div>
                <Item />
                {/* <HomeScreen /> */}
                </div>
                <div>
                    
                </div>
            </div>
         );
    }
}
 
export default Home;