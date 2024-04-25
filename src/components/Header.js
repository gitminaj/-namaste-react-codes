import React, {useState} from "react";
import LOGO_URL  from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";
import {useContext} from "react";
import { useSelector } from 'react-redux';


const Header = () =>{
    
  const status = useInternetStatus();
  const [loginToggle, setLoginToggle] = useState("Login");

  const {name} = useContext(UserContext);


//   const cartItem = useSelector((store)=> (store.cart.items.length) )
  const cartItem = useSelector((store)=> (store.cart.items.length) )


    return(
        <div className="flex bg-slate-300 justify-between shadow-md shadow-gray-900 mb-4" >
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
                <li>{name}</li>
                <li><Link to="/cart" className="no-underline"> cart : {cartItem}</Link></li>
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