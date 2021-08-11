import React from 'react'
import CallIcon from '../SVGComponents/callIcon'
import './sidebar.scss'

import img from '../../images/1.png'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_call-btn">
                <div className="call-btn call-btn-img">
                    <img src={img} alt="call_img" />
                </div>
                <div className="call-btn-text">
                    <h1>Operator</h1>
                    <p>ovqat hizmati</p>
                </div>
                <div className="call-btn call-btn-icon">
                    <CallIcon />
                </div>
            </div>
            <div className="sidebar_meals">
                <ul className="meals_list">
                    <li className="list_item">
                        <button className="list_link">
                            Palov
                        </button>
                    </li>
                    <li className="list_item">
                        <button className="list_link">
                            Pizza
                        </button>
                    </li>
                    <li className="list_item">
                        <button className="list_link">
                            Kofe
                        </button>
                    </li>
                    <li className="list_item">
                        <button className="list_link">
                            Baliq
                        </button>
                    </li>
                    <li className="list_item">
                        <button className="list_link">
                            Shashlik
                        </button>
                    </li>
                    <li className="list_item">
                        <button className="list_link">
                            FastFood
                        </button>
                    </li>
                    <li className="list_item">
                        <button className="list_link">
                            Desert
                        </button>
                    </li>
                    <li className="list_item">
                        <button className="list_link">
                            Zavtrak
                        </button>
                    </li>
                    <li className="list_item list_item-big">
                        <span className="list_link">
                            Barcha ovqatlar
                        </span>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
