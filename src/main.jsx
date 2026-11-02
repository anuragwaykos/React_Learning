import ReactDom from "react-dom";
import App from "./App"
import Header from "./components/header/Header.jsx";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import myReduxStore from "./redux/store/Store.js"; //for redux implementation

//yaha pehele <BorwserRouter> thaa jab ham redux is learning ham Povider pe Switch hogaye

ReactDom.render(
    <Provider store={myReduxStore}>

        <BrowserRouter>
            <App />
        </BrowserRouter>

    </Provider>
    ,document.getElementById("root"))