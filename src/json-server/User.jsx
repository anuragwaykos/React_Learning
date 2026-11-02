import React, {useEffect} from 'react';
import {useEffect} from "react";
import axios from "axios";

const User = () => {

    useEffect(() => {

        getUser();


    }, []);

    const getUser = ()=>{
        axios.get("http://localhost:3000")
            .then((res)=>{
                console.log(res)



        })
            .catch((error)=>{
                alert("somthing went wrong")
            console.log(error)
        })
    }
    return (
        <div>
            <h2>User Information</h2>
        </div>
    );
};

export default User;