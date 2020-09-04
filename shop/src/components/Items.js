import React from 'react'
import img1 from './images/3.jpeg'
import './items.css'
import {Row ,Col} from 'react-bootstrap'
import axios from 'axios'
   

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            products : []
         }
    }
    componentDidMount(){
        const data =  axios.get("/api/products")
        .then((res) => {this.setState({products : res.data})})
        .catch((err)=> console.log(err))
    }
    render() { 
        return ( 
            <div>
                <h1 className="itemname">Top 10 </h1>
                <div className="itemlist">
                    <Row>
                        <Col>
                    <ul>
                        <li>
                        <img src={img1} alt="image" className="item"/>
                        </li>
                        <li>
                            Iphone xxxx
                        </li>
                        <li>
                            1000
                        </li>
                        <li>
                            description
                        </li>
                    </ul>
                    </Col>
                    <Col>
                    <ul>
                        <li>
                        <img src={img1} alt="image" className="item"/>
                        </li>
                        <li>
                            Iphone xxxx
                        </li>
                        <li>
                            1000
                        </li>
                        <li>
                            description
                        </li>
                    </ul>
                    </Col>
                    <Col>
                    <ul>
                        <li>
                        <img src={img1} alt="image" className="item"/>
                        </li>
                        <li>
                            Iphone xxxx
                        </li>
                        <li>
                            1000
                        </li>
                        <li>
                            description
                        </li>
                    </ul>
                    </Col>
                    </Row>
                    </div>
            </div>
         );
    }
}
 
export default Items;