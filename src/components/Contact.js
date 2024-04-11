import UserContext from "../utils/UserContext.js";
import { useContext } from "react";


const Contact = () =>{
    const {name} = useContext(UserContext)

    return(
        <div>
            <h1>contact us page:</h1>
            <h2>{name}</h2>
            
        </div>
    )
}

export default Contact;