import {useRef} from 'react';
import {useDispatch} from "react-redux";

const Name = () => {

    let inputRef =useRef();
    let dispatch = useDispatch();

    const getData = ()=>{
        //create action object
        var actionObj ={                 //in action type property is madetoery(key should be type only)
            type:"NAME",
            nameCom:inputRef.current.value
        };

          dispatch(actionObj);  //what he wil do call reducer


    }
    return (
        <div style={{padding:"50px"}}>
            <h2>Name Component</h2><br/>
            <input  ref={inputRef} type="text" placeholder="Add Name"/>
            <button onClick={getData}>Submit</button>
        </div>
    );
};

export default Name;