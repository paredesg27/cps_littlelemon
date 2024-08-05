import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import React, { useReducer} from "react";
import Header from "./Header";
function Main(){

    const seedRandom = function(seed){
        var m = 2**35 -31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % n) / m;
        }
    }
    const fetchAPI = function(date){
        let result =[];
        let random = seedRandom(date.getDate());
        for( i =14; i<=23; i++){
            if(random() < 0.5){
                result.push(i + ':00');
            }
            if(random() > 0.5){
                result.push(i + ':30');
            }
        }
        return result;
    }

const submitAPI = function(formData){
    return true;
}

    const intitialState = {avaiableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, intitialState);

    function updateTimes(state, date){
        return{avaiableTimes: fetchAPI(newDate())}
    }

    const navigate = useNavigate();
    function submitForm(formData){
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    }


    return(
        <main>
            <Route path="/" element={<Header/>}/>
            <Route path="/booking" element={<Booking avaiableTimes ={state} dispatch={dispatch} submitForm={submitForm}/>}/>
            <Route path="/" element={<Header/>}/>
        </main>
    )
}export default Main;
