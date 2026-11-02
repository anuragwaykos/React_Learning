import React, {useContext} from 'react';
import {useContext} from "react";
import myfirstContext from "./context.js";

const D = () => {

    const contextdata = useContext(myfirstContext)
    return (
        <div>
            <h2>my value :{contextdata}</h2>
            
        </div>
    );
};

export default D;