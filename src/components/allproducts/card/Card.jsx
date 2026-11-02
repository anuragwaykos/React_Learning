import React from 'react';
import "./Card.css"

const Card = (prop) => {
    return (
        <div className="card">
            <img src={prop.image} alt="" width={270} height={200}/>
            <h2>{prop.title}</h2>
            <p>{prop.price}</p>
            <button>Product Details</button>
        </div>
    );
};

export default Card;