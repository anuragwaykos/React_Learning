import React from 'react';
import context from "./context.js";
import B from "./B.jsx";
import myfirstContext from "./context.js";

const A = () => {
    return (
        <div style={{}}>
            <h2>A Component</h2>

            <myfirstContext.Provider value={100}>

                <B/>

            </myfirstContext.Provider>



        </div>
    );
};

export default A;