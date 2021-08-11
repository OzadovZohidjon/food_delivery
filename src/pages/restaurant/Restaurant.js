import React from 'react'
import Cart from '../../component/cart/Cart';
import ClockIcon from '../../component/SVGComponents/ClockIcon';
import MoneyIcon from '../../component/SVGComponents/MoneyIcon';
import './restaurant.scss'

function Restaurant(props) {


    const id = props.id;
    const data = props.data;
    let items = {}


    data.forEach((item) => {
        if (item.id === id) {
            items = item;
        }
    })

    const backgroundStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${items.restaurant_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    if (items.sections !== undefined) {
        return (
            <div className="restaurant_page">
                <div className="container">
                    <div className="restaurant_page-content">
                        <div className="restaurant_page-header" style={backgroundStyle}>
                            <div className="header_content">
                                <div className="content_title">
                                    <h1>{
                                        items.restaurant_name
                                    }
                                    </h1>
                                </div>
                                <div className="content_sub">
                                    <div className="work_time content_sub-block">
                                        <span className="block_icon">
                                            <ClockIcon width={20} height={20} />
                                        </span>
                                        <span className="block_desc">
                                            08:30 - 21:30
                                        </span>
                                    </div>
                                    <div className="delivery_price content_sub-block">
                                        <span className="block_icon">
                                            <MoneyIcon width={20} height={20} />
                                        </span>
                                        <span className="block_desc">
                                            13 200 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="restaurant_page-meals">
                            {
                                items.sections.map((section) => {
                                    return (
                                        <section key={section.id} className="meals_section" id={`#section${section.id}`}>
                                            <h2 className="meals_section-title">
                                                {section.section_name}
                                            </h2>
                                            <div className="meals">
                                                {
                                                    section.meals.map((item) => {
                                                        return (
                                                            <div className="meals_item" key={item.id} onClick={() => { props.modalClick(!props.modalValue); props.modalId(items.id, section.id, item.id) }}>
                                                                <div className="meals_item-img">
                                                                    <img src={item.meal_img} alt="meal_img" />
                                                                </div>
                                                                <div className="meals_item-content">
                                                                    <h3 className="meals_title">{item.meal_name}</h3>
                                                                    <p className="meals_subtitle">
                                                                        <span className="meals_subtitle-icon">
                                                                            <MoneyIcon width="24" height="24" />
                                                                        </span>
                                                                        <span className="meals_subtitle-text"> {item.meal_price} </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </section>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="restaurant_page-sidebar">
                        <Cart />
                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <div className="restaurant_page">
                <div className="container">
                    <div className="restaurant_page-content">
                        <h1>Page not found</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Restaurant
