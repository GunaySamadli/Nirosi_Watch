import React, { Component } from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SliderData } from "./SliderData";
import './slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faUser,faCartShopping } from '@fortawesome/free-solid-svg-icons';




export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: "",
            prevArrow: "",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="slider">
                <Slider {...settings}>
                    {SliderData.map((slide, index) => {
                        return (
                            <Container key={index}>
                                <Row style={{ alignItems: 'center' }}>
                                    <Col md={7}>
                                        <div className="slider-img">
                                            <img src={slide.image} alt='' />
                                        </div>
                                    </Col>
                                    <Col md={5} key={index}>
                                        <div className="slider-body">
                                            <span>{slide.subTitle}</span>
                                            <h3>{slide.title}</h3>
                                            <p>{slide.description}</p>
                                            <a className="slider-button" href="#">Shop Now</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        )
                    })}
                </Slider>

            </div>
        );
    }
}


