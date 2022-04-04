import { React, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from './product.scss';
import './product.scss'



// const Product = () => {
//     const [toogleState, setToogleState] = useState(1);

//     const toogleTab=(index)=>{
//         setToogleState(index);
//     }
//     return (
//         <div id='product'>
//             <Container>
//                 <Row>
//                     <Col md={4}>
//                         <div className="product-body">
//                             <Link to='/'>
//                                 <div  className="product-img active">
//                                     <img src="https://cdn.shopify.com/s/files/1/0327/6426/4588/products/product_28.jpg?v=1581396885" alt="" />
//                                 </div>
//                                 <div className="product-img">
//                                     <img src="https://cdn.shopify.com/s/files/1/0327/6426/4588/products/product_12_24580d19-e985-4cac-b72f-6213bc928a7d_grande.jpg?v=1581396922" alt="" />
//                                 </div>
//                                 <div className="product-img-hover">
//                                     <img src="https://cdn.shopify.com/s/files/1/0327/6426/4588/products/product_26_4bbef1db-e519-41f5-8008-c4de8a4ec186.jpg?v=1581396885" alt="" />
//                                     <div className="product-icon">
//                                         <Link to="/">
//                                             <FontAwesomeIcon icon={faHeart} />
//                                         </Link>
//                                         <form action="">
//                                             <button type='submit'>
//                                                 <FontAwesomeIcon icon={faCartShopping} />
//                                             </button>
//                                         </form>
//                                         <Link to="/">
//                                             <FontAwesomeIcon icon={faSearch} />
//                                         </Link>

//                                     </div>
//                                 </div>
//                             </Link>
//                             <div className="info-product">
//                                 <h4 className="title-product">
//                                     <a href=" ">Gunmetal Sandstone</a>
//                                 </h4>
//                                 <span className="price">$120.00</span>
//                             </div>
//                             <div className="product-color">
//                                 <div className="color">
//                                     <span onClick={()=>toogleTab(1)} style={{backgroundColor:'navajowhite'}} className='circle'></span>
//                                 </div>
//                                 <div className="color">
//                                     <span onClick={()=>toogleTab(2)} style={{backgroundColor:'brown'}}  className='circle'></span>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }

// export default Product;


const Product = () => {
  return (
    <div>Product</div>
  )
}

export default Product