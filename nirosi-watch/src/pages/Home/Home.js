import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from '../../components/Slider/Slider.js';
import './home.scss'
import Product from '../../components/Product/Product.js';



function Home() {
    return (
        <>
            <Slider />
            <div className="shopify-section">
                <div className="shopify-section-body">
                    <h3>
                        Hot Deal! Sale
                        <span>50%</span>
                    </h3>
                    <div className="shopify-section-subtitle">MANY OF MANY</div>
                    <a href=" " className="shopify-section-button">
                        Discover now
                    </a>
                </div>
            </div>
            <Product/>
        </>

    )
}

export default Home