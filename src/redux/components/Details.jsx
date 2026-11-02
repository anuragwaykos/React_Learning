import React from 'react';
import {useSelector} from "react-redux";  //we can use or ascess reduser data

const Details = () => {

    let data =useSelector((storedata)=>{

        return storedata;

    });


    return (
        <div style={{padding:"50px"}}>
            <h2>Details Component</h2><br/>
            <p style={{color:"green", fontWeight:"bold"}}>Name:{data.name}</p>
            <p style={{color:"green", fontWeight:"bold"}}>City</p>
        </div>
    );
};

export default Details;