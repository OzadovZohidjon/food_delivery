import React from 'react'
import Content from '../../component/content/Content'
import SearchBar from '../../component/searchBar/SearchBar'
import Sidebar from '../../component/sidebar/Sidebar'
import './main.scss'

function Main(props) {
    return (
        <div className="main container">
            <SearchBar />
            <Sidebar />
            <Content data={props.data} getId={props.getId} />
        </div>
    )
}

export default Main
