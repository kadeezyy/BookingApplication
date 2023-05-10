import React from 'react'
import "./TextField.css"

const TextField = ({text}) => {
    return (
        <section className="bg-primary text-light p-5">
            <div className="container" id="main-text-container">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h3 className="mb-3 mb-md-0 text-field">{text}</h3>

                    <div className="input-group news-input">
                        {/* <input type="text" class="form-control" placeholder="Введите почту" />
                        <button class="btn btn-dark btn-lg" type="button">Подписаться</button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TextField