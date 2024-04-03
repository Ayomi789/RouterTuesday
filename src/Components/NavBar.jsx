import { Link } from "react-router-dom";
import './NavBar.css'
import { Fragment } from "react";


function NavBar(){

    return(
        <>
        <div className="Nav">
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Work'>Work</Link>
            <Link to='/Shop'>Shop</Link>
      
        </div>
        </>
    )
}

export default NavBar;