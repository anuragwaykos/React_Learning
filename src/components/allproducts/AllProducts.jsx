import React from 'react';
import {useState} from "react";
import axios from "axios";
import "./AllProducts.css"
import Card from "./card/Card.jsx";

const AllProducts = () => {

    let [allProduct,setAllProduct] = useState([]);

    const getProducts = ()=>{

        var promiseObject =axios.get("https://fakestoreapi.com/products");
        promiseObject
            .then((res)=>{
                console.log("then")
                console.log(res.data);
                setAllProduct(res.data); //adding all data to useState [{},{},...]

            })
            .catch((error)=>{
                console.log("error")
                console.log(error)

            });

    };

    return (
        <div>
            <h2>All products</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda atque blanditiis cumque ea enim id perferendis quasi quis,
                velit veritatis?</p>
            <button onClick={getProducts}>Get Products</button>

            <div className="allProd">
                {
                    allProduct.map(function (element,index){
                        return <Card
                            image={element.image}
                            title={element.title}
                            price={element.price}
                        />;
                    })
                }

            </div>
        </div>
    );
};

export default AllProducts;