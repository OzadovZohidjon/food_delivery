import React from 'react'
import './searchbar..scss'

function SearchBar() {
    return (
        <div className="searchbar">
            <div className="searchbar_block">
                <input type="text" className="searchbar_input" placeholder="Restoranlar, ovqatlar..." />
                <button className="searchbar_btn">Izlash</button>
            </div>
        </div>
    )
}

export default SearchBar
