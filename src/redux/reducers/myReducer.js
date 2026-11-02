const initialData = {   //created initial data and store in state so my reducer return datat and store into redux store
    name:"",
    products :[],
}


const myReducer = (state = initialData,action)=>{

    if(action.type==="NAME"){          //learn about this
        state={
            name: action.nameCom
        }
    }

    alert("reducer Trigger");


    return state;
};

export default myReducer;