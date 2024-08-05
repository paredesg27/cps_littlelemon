import React from 'react';
import BookingForm from './BookingForm';

function Booking(props) {
    return (
        <BookingForm avaiableTimes={props.avaiableTimes} dispatch={props.dispatch} submitForm={props.Submitform}/>
    );
}

export default Booking;
