import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import React, { useReducer } from "react";
import Header from "./Header";
import ConfirmedBooking from "./ConfirmedBooking";

function Main() {
    const seedRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m; // random seed
        }
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 14; i <= 23; i++) { // times from xx:00 to xx:30
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() > 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    }

    const submitAPI = function (formData) {
        return true;
    }

    const initialState = { availableTimes: fetchAPI(new Date()) }; 
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, action) {
        return { availableTimes: fetchAPI(new Date(action.date)) }; 
    }

    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    )
}

export default Main;
