import React from 'react';
import {useState} from "react";

const UserNames = () => {

    let [name,setName] = useState(["Atul","Anu","Rit","Anit"])
    return (
        <div style={{textAlign:"left", padding:"50px"}}>
            <h2>User Names</h2>
            <ul>
                {
                    name.map(function (name){
                        return <li>{name}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default UserNames;