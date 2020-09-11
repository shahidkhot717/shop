import React from 'react'
import img1 from './images/3.jpeg'
import './items.css'
// import {Row ,Col} from 'react-bootstrap'
// import axios from 'axios'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            products : [],
            InCart : false
         };
    }
    // async componentDidMount(){
    //     var {data} =  await axios.get("/api/products")
        
    //     .then(this.setState({ products : data }))
    //     console.log(data)
    //     .catch(err => console.log(err))
    // }

    cart = (e) =>{
        this.setState(prevState=>({
            InCart : !prevState.InCart
        }));
    }
    render() { 
    //   const InCart = false
        return ( 
           
            <div>
                <h1 className="itemname">Top 10 </h1>
                <div className="itemlist">
                    <ul>
                        
                        <li>
                            <div>
                            <img src={img1} alt="image" className="item"/>
                        </div>

                        <div>
                         iphone
                        </div>
                        
                        <div>
                            1000
                        </div>

                        <div>
                            description
                        </div>
                        <div>
                            <button onClick={this.cart}>
                                { this.state.InCart ? 
                                (<p>already in cart</p>) :
                                (<FontAwesomeIcon icon={faCartPlus} />)}
                            </button>
                        </div>
                        
                        </li>
                        
    
                    </ul>

                    <ul>
                        
                        <li>
                            <div>
                            <img src={img1} alt="image" className="item"/>
                        </div>

                        <div>
                         iphone
                        </div>
                        
                        <div>
                            1000
                        </div>

                        <div>
                            description
                            </div>
                        </li>
                        
    
                    </ul>

                    <ul>
                        
                        <li>
                            <div>
                            <img src={img1} alt="image" className="item"/>
                        </div>

                        <div>
                         iphone
                        </div>
                        
                        <div>
                            1000
                        </div>

                        <div>
                            description
                            </div>
                        </li>
                        
    
                    </ul>
                    
                   
                </div>
                   
            </div>

         );
    }
}
 
export default Items;