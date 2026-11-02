import {useReducer} from 'react';

const reducerFn = (state,action)=>{
//wathever return this function updated in state
    //here write logic to update state
    return "Anurag"
}

const UseReducer = () => {

    let [state,dispatch] =useReducer(reducerFn,100); //hear i can pass anything array int string object

    const modifyState=()=>{

        dispatch({type:"Dummy"}); //action object
        //going to call reducerFn
        //predefine function
        //take care re-render the component
        //here you can pass in argument in dispatch
        //Dummy go ind shotein parameter in reduceFn (action)
    }

    return (
        <div>
            <h2>This is Reducer Hook Concept:{state}</h2>
            <button onClick={modifyState}>Uppdate State</button>
        </div>
    );
};

export default UseReducer;