import React from 'react'
import { Link } from 'react-router-dom'
import './TopBar.scss'

function TopBar() {

    return (
        <div className="top_bar">
            <div className="container top_bar-container">
                <div className="top_bar-left">
                    <Link to="/" className="logo_link">
                        <h3>CityFood</h3>
                    </Link>
                </div>
                <div className="top_bar-right">
                    <div className="top_bar-content">
                        <h3>cart</h3>
                    </div>
                    <div className="top_bar-content">
                        <h3>profil</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
