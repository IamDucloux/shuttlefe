import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
    return (
        <div className="Calendar_container">
            <h4>Escoge una fecha</h4>
            <DatePicker></DatePicker>
        </div>
    )
}

export default Calendar
