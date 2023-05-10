import React from 'react'
import "./SelectionField.css"

const SelectionField = ({ options, onOptionChange, disabledOptionName }) => {
    return (
        <div className="main-div">
            <label className="select" htmlFor="slct">
                <select id="slct" required onChange={onOptionChange}>
                    <option value="" disabled selected>Select {disabledOptionName}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <svg>
                    <use href="#select-arrow-down"></use>
                </svg>
            </label>

            <svg className="sprites">
                <symbol id="select-arrow-down" viewBox="0 0 10 6">
                    <polyline points="1 1 5 5 9 1"></polyline>
                </symbol>
            </svg>

        </div>
    )
}

export default SelectionField