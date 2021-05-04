import React from 'react';
import Calendar from './Calendar';
import Vehicle from './Vehicle';


const Reservations = () => {
    return (
        <div className="reservations">
            <h1>Reservar un auto</h1>
            <Calendar/>
            <div className="cars_list">
            <h4>Vehiculos Disponibles</h4>
            </div>
        </div>
        
    )
}

export default Reservations
