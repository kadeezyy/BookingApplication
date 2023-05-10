import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerField.css"
const DatePickerField = ({ handleChange, selectedDate }) => {
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        setStartDate(selectedDate);
    }, [selectedDate]);

    return (
        <DatePicker
            className='date-field'
            selected={startDate}
            onChange={(date) => {
                handleChange(date);
                setStartDate(date);
            }}
            showTimeSelect
            timeIntervals={15}
            timeFormat="HH:mm"
            dateFormat="dd/MM/yyyy HH:mm"
        />
    )
}

export default DatePickerField