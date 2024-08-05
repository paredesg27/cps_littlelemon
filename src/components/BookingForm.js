import React, { useState } from 'react';

function BookingForm() {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/**Date */}
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required ></input>
                        </div>
                        {/**Time */}

                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="" disabled>Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}> {availableTimes}</option> })
                                }
                            </select>
                        </div>
                        {/**Guests */}

                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                        </div>
                        {/** Occasion */}

                        <div>
                            <label htmlFor='book-occassion'>Choose an Occasion:</label>
                            <select id='book-occassion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Not Applicable</option>
                                <option>Anniversary</option>
                                <option>Birthday</option>
                            </select>
                        </div>
                        <div className='book-form-submit'>
                            <input aria-label='On click' type='submit' value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default BookingForm;
