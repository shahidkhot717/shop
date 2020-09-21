import React from 'react'
// import img1 from './images/3.jpeg'
import './items.css'
// import {Row ,Col} from 'react-bootstrap'
// import axios from 'axios'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ItemHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            products : [],
            InCart : false,
            error : null
         };
    }




    componentDidMount(){
        const apiUrl = "/api/products"

        fetch(apiUrl)
        .then(res =>res.json())
        .then(
            (result) =>{
                this.setState({
                    products:result
                })
            },
            (error)=>{
                this.setState ({error})
            })
        // var {data} =  await axios.get("/api/products")
        
        // .then(this.setState({ products : data }))
        // console.log(data)
        // .catch(err => console.log(err))
    }

    cart = (e) =>{
        this.setState(prevState=>({
            InCart : !prevState.InCart
        }));
    }
    render() { 
        const {error,products} =this.state;
        if(error){
            return(
                <div>{error.message}</div>
            )
        }else{
        return (
            <div>
                <h2>products</h2>
                {products.map(product => (
                    <ul key={product.id}>
                            <li><img src={product.image} alt="hello"/></li>
                            <li>{product.name}</li>
                            <li>{product.price}</li>
                            <li>{product.description}</li>

                    </ul>
                ))}
            </div>
        )
        }
    
}
}
 
export default ItemHome;