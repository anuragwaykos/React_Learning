import React from 'react';
import {useState} from "react";

const City = () => {

    let [city,setCity] =useState("");

    const getCity=()=>{
        alert(city);
    }

    return (
        <div style={{padding:"50px"}}>
            <h2>City Componenty</h2>
            <select onChange={(event)=>{setCity(event.target.value);}}>
                <option>Pune</option>
                <option>Nashik</option>
                <option>Mumbai</option>
                <option>Chikhli</option>
            </select>
            <button onClick={getCity}>Submit</button>
        </div>
    );
};

export default City;