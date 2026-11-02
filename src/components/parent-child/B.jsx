import React from 'react';
import C from "./C.jsx"

const bStyle = {
    width:"300px",
    boxShadow:"0 0 10px red ",
    textAlign:"center",
    padding:"30px",
    margin:"50px auto"

}

const B = (props) => {
    return (
        <div style={bStyle}>
            <h2>B Component</h2>
            <p>Date :{props.info}</p>
        </div>
    );
};

export default B;