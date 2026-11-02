import React, {useState} from 'react';
import B from "./B.jsx"

const aStyle = {
    width:"500px",
    boxShadow:"0 0 10px green ",
    textAlign:"center",
    margin:"100px auto",
    padding:"60px"

}

const A = () => {

    let [state,setState] = useState("-----");
    return (
        <div style={aStyle}>
            <h2>A component</h2>
            <button onClick={()=>{setState("Anurag")}}>Pass data to B</button>
            <B info={state}/>
        </div>
    );
};

export default A;