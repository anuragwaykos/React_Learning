import "./ImgTask.css"
import {useState} from "react";

function ImgTask(){

    let [title,setTitle] = useState();

    var[url,chUrl] = useState("https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png");

    const changeToAngular = ()=>{
        chUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEuEEJ2EjIT8LmBrAW7DX-1UZMNOHsHp6QoOsw_08Jg&s=10");
        setTitle("Angular JS")
    };

    const changeToReact = ()=>{
       chUrl("https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png")
        setTitle("React JS")
    }
    return(
      <div id="ImgTask">
          <h1>{title}</h1>
          <img src={url} alt="Not Found" width="500" height="300"/>
          <br/>
          <button onClick={changeToReact}>React</button>
          <button onClick={changeToAngular}>Angular</button>

      </div>
    );
}
export default ImgTask;