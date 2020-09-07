import React, { useState, useEffect } from 'react'
import axios from 'axios'
import img1 from './images/3.jpeg'
import { Link } from 'react-router-dom';



function HomeScreen(props){
    const [products,setProduct] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            const { data } = await axios.get('/api/products');
            setProduct(data); 
        }
        fetchData();
        return () => {
            

        };
    },[])


    return (<ul>
        {
            products.map(product =>
                <li>
                    <div>
                        <Link to={'/profuct/' + product._id}>
                            <img src={product.image}/>
                        </Link>
                    </div>
                </li>
                )
        }
    </ul>
    )
}

//     return(
//         <div>
//         <h1 className="itemname">Top 10 </h1>
//         <div className="itemlist">
//             <ul>
//                 {
//                     products.map(product=>
//                 <li >
//                     <div>
                        
//                     <img src={img1} alt="image" className="item"/>
//                 </div>

//                 <div>
//                   {product.name}
//                 </div>
                
//                 <div>
//                     1000
//                 </div>

//                 <div>
//                     description
//                     </div>
//                 </li>
//                   )
//                 } 

//             </ul>
            
           
//         </div>
           
//     </div>
//     )
// }

































export default HomeScreen;