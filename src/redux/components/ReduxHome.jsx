import React from 'react';
import Name from "./Name.jsx";
import City from "./City.jsx";
import Details from "./Details.jsx";

const ReduxHome = () => {
    return (
        <div>
            <div>
                <Name/>
                <City/>
            </div>

            <Details/>
        </div>
    );
};

export default ReduxHome;