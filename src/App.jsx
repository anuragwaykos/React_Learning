
import './App.css'
import Header from "./components/header/Header.jsx";
import Counter from "./components/counter/Counter.jsx";
import ImgTask from "./components/imgtask/ImgTask.jsx";
import Products from "./components/products/Products.jsx";
import home from "./components/home/Home.jsx";
import Home from "./components/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import {Link, Route, Routes} from 'react-router-dom'
import Elect from "./components/products/categories/elect/Elect.jsx";
import Jew from "./components/products/categories/jew/Jew.jsx";
import PageNotFound from "./components/pagenotfound/PageNotFound.jsx";
import AllProducts from "./components/allproducts/AllProducts.jsx";
import UserNames from "./components/usernames/UserNames.jsx";
import ReduxHome from "./redux/components/ReduxHome.jsx";
import A from "./components/parent-child/A.jsx"
import Timer from "./components/timer/Timer.jsx";
import UseReducer from "./components/reducer/UseReducer.jsx";
import Name from "./redux/components/Name.jsx";
import Details from "./redux/components/Details.jsx";
import City from "./redux/components/City.jsx";



function App() {

  return (
    <div className="app">
        <Nav/>

        {/*<div className="subAppContainer">*/}
        {/*    <Name/>*/}
        {/*    <City/>*/}
        {/*</div>*/}
        <hr/>

        {/*<Details/>*/}
        {/*<UseReducer/>*/}
        {/*<Timer/>*/}
        {/*<A/>*/}

        <Routes>
            <Route path={"/"} element={<Home/>}/>


            <Route path={"/products"} element={<Products/>}>
                <Route path={"elect"} element={<Elect/>}/>
                <Route path={"jew"} element={<Jew/>}/>
            </Route>


            <Route path={"/counter"} element={<Counter/>}/>
            <Route path={"/imgtask"} element={<ImgTask/>}/>
            <Route path={"/allproducts"} element={<AllProducts/>}/>
            <Route path={"/usernames"} element={<UserNames/>}/>
            <Route path={"/redux"} element={<ReduxHome/>}/>

            <Route path={"*"} element={<PageNotFound/>}/>

        </Routes>



    </div>
  );
}

export default App
