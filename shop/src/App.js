import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Route} from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
    
    render() { 
        return ( 
            <BrowserRouter>
            <div>

                <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />

            </div>
            </BrowserRouter>
         );
    }
}
 
export default App;