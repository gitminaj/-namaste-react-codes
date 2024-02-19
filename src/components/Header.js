import React, {useState} from "react";
import LOGO_URL  from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () =>{
    const [loginToggle, setLoginToggle] = useState("Login");

    return(
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-list">
                <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none' }}>About us</Link></li>
                <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact us</Link></li>
                <button onClick={ () => {
                    setLoginToggle("Logout")
                    if(loginToggle === "Logout"){
                        setLoginToggle("Login")
                    }
                }}>{loginToggle}</button>
            </div>
        </div>
    )
}

export default Header;