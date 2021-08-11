import React, { useState } from 'react'
import './modals.scss'
import CloseIcon from '../SVGComponents/Close'

function MealModal(props) {


    const [count, setCount] = useState(1)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    if (props.data !== null) {

        const backgroundStyles = {
            background: ` linear-gradient(180deg, rgba(2, 0, 36, 0.3897934173669467) 0%, rgba(0, 0, 0, 0.7343312324929971) 77%, rgba(0, 0, 0, 1) 100% ), url('${props.data.meal_img}')`,
        }

        let price = count * props.data.meal_price;

        return (
            <div className={props.changeModal ? 'modal open' : 'modal'}>
                <div className="modal_wrap">
                    <div className="modal_panel meal_modal">
                        <div className="panel_head">
                            <div style={backgroundStyles} className="head_img" >
                            </div>
                            <div className="close-modal-btn" onClick={() => props.modalClick(!props.changeModal)}>
                                <CloseIcon fill="#fff" />
                            </div>
                        </div>
                        <div className="panel_body">
                            <div className="panel_body-title">
                                <h1>{props.data.meal_name}</h1>
                                <p>{props.data.meal_description}</p>
                            </div>
                            <div className="body_section">
                                <div className="section_title">
                                    <h3>Количество</h3>
                                </div>
                                <div className="section_body">
                                    <div>
                                        <span className="quanty">{count}</span>
                                        <span className="price">{price} сум</span>
                                    </div>
                                    <div className="body_btns">
                                        <span className="body_btn" onClick={() => decrement()} default>-</span>
                                        <span className="body_btn" onClick={() => increment()}>+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="add_btn">
                                <span>Добавить в корзину</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default MealModal
