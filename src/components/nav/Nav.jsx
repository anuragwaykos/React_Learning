import "./Nav.css"
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <div className="leftPanel flexContainer">
                <h2>React Routing</h2>
            </div>
            <div className="rightPanel flexContainer">
                <Link to="/">Home </Link>
                <Link to="/products">Products </Link>
                <Link to="/allproducts">All Products</Link>
                <Link to="/counter">Counter </Link>
                <Link to="/usernames">UserNames</Link>
                <Link to="imgtask">ImgTask</Link>
                <Link to="/redux">Redux</Link>
            </div>
        </div>
    );
};

export default Nav;