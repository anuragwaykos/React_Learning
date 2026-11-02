import {useState} from 'react';
import {useRef} from "react";


    const Timer = () => {

    const [timer, setTimer] = useState(0);
        const timerId = useRef(); //timerid = {current:undefined}
        //timerId.current = new value

    // const [timerId,setTimerId] = useState();  //hear timer id not showing in screen but it is re-rendaring


    const startTimer = ()=>{
        timerId.current = (setInterval(()=>{
           setTimer((prevTimer) => prevTimer + 1);
       },1000))
    };

    const stopTimer = ()=>{
        clearInterval(timerId.current);

    }

    const resetTimer = ()=>{
        setTimer(0);
    }


    return (
        <div style={{width:"500px",margin:"100px auto",padding:"20px",boxShadow:"0 0 10px green",textAlign:"center"}}>

            <h2>Timer Value Is : {timer}</h2>
            <button onClick={startTimer}>start</button>
            <button onClick={stopTimer}>stop</button>
            <button onClick={resetTimer}>clear</button>

        </div>
    );
};

export default Timer;