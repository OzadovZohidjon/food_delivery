import React from 'react'
import './recomendation.scss'
import MoneyIcon from '../SVGComponents/MoneyIcon'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

function Recomendation(props) {


    var settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };



    return (
        <div className="recomendation">
            <div className="recomendation_slider">
                <Slider {...settings} >
                    {
                        props.data.map((item) => {
                            return (
                                <Link to={`/restaurant/${item.restaurant_name.split(' ').join('-')}`} key={item.id} onClick={() => props.getId(item.id)}>
                                    <div className="meals_item" >
                                        <div className="meals_item-img">
                                            <img src={item.restaurant_img} alt="meal_img" />
                                        </div>
                                        <div className="meals_item-content">
                                            <h3 className="meals_title">{item.restaurant_name}</h3>
                                            <p className="meals_subtitle">
                                                <span className="meals_subtitle-icon">
                                                    <MoneyIcon width="24" height="24" />
                                                </span>
                                                <span className="meals_subtitle-text">YETKAZIB BERISH TEKIN</span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Recomendation
