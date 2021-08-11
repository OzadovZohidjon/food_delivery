import React from 'react'
import Recomendation from '../recomendation/Recomendation'
import './content.scss'

function Content(props) {
    return (
        <div className="main_content">
            <Recomendation data={props.data} getId={props.getId} />
            <Recomendation data={props.data} getId={props.getId} />
            <Recomendation data={props.data} getId={props.getId} />
            <Recomendation data={props.data} getId={props.getId} />
        </div>
    )
}

export default Content
