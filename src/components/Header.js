import React, {useState} from "react";
import LOGO_URL  from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () =>{
    
  const status = useInternetStatus();
  const [loginToggle, setLoginToggle] = useState("Login");

    return(
        <div className="flex bg-slate-300 justify-between shadow-md shadow-gray-900" >
            <div className="flex items-center justify-center">
                <img src={LOGO_URL} className="w-20 rounded-lg ml-1"/>
            </div>
            <div className="flex list-none m-1  items-center">
                <ul className="flex space-x-6">
                <li>Internet: {status}</li>
                <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none' }}>About us</Link></li>
                <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact us</Link></li>
                <li><Link to="/grocery" style={{ textDecoration: 'none' }}>Grocery</Link></li>
                </ul>
                
                <button className="m-6" onClick={ () => {
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