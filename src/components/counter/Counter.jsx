import "./Counter.css";
import {useState} from "react";
function Counter(){

    var[state,setState]=useState(0);
    var[one,setOne] = useState(0);



    const increaseCount = ()=>{
        setState(state+1);
        setOne(20);
    };

    return(
        <div className="counter">
            <h2>Counter App</h2>
            <p>Count Value is: {state}</p>
            <p>new Val is : {one}</p>

            <button onClick={increaseCount}>incCount</button>

        </div>
    );
}

export default Counter