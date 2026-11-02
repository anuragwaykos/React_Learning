import "./Products.css"
import {Link, Outlet} from "react-router-dom";

function Products(){
    return(
        <div>
            <h2 style={{color:"green",textAlign:"center",marginTop:"20px",fontSize:"30px"}}>Products Components</h2>
            <div className="productsContainer">
                <div className="linksContainer">
                    <Link to="elect" style={{color:"white" , textDecoration:"none" , fontSize:"21px"}} >Electronics</Link>
                    <Link to="jew" style={{color:"white" , textDecoration:"none" , fontSize:"21px"}} >Jewelery</Link>
                    <Link to="" style={{color:"white" , textDecoration:"none" , fontSize:"21px"}} >Men's Clothing</Link>
                    <Link to="" style={{color:"white" , textDecoration:"none" , fontSize:"21px"}} >Women's Clothing</Link>
                </div>
                <div className="componentsContainer">
                    <Outlet/>
                </div>
            </div>
        </div>

    );
}

export default Products;