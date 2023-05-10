import React from 'react'
import "./InputField.css"
const InputField = () => {
    return (
        <div className='comment'>
            {/* <h3 className="title">Оставь комментарий</h3> */}
            <div className="inputContainer">
                <input type="text" className="type" placeholder='Комментарий' />
            </div>
        </div>
    )
}

export default InputField