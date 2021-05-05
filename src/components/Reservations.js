import React from 'react';
import Calendar from './Calendar';
import Vehicle from './Vehicle';


const Reservations = () => {
    return (
        <div className="reservations">
            <h1>Reservar un Auto</h1>
            <div className="calendar_card">
                <h4>Fecha de recogida</h4>
                <Calendar />
            </div>
            <div className="calendar_card">
                <h4>Fecha de entrega</h4>
                <Calendar />
            </div>
            <div className="cars_list">
                <h4>Vehiculos Disponibles</h4>
            </div>
        </div>

    )
}

export default Reservations
