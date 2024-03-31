import MenuList from "./MenuList";
import { useState } from "react";


const RestaurantCategory = ({Menu,clickStatus,setShowIndex}) => {

    const [localClickStatus , setLocalClickStatus] = useState(false);


    const handleClick = () =>{
        setShowIndex()
    }

    console.log(localClickStatus)

    return(
        <div className="border-b-2 flex flex-col ">
                <div className="flex items-center justify-between cursor-pointer" onClick={handleClick}> 

                    <h1 className="p-4 font-bold text-lg" >{Menu?.title}</h1>
                    <span> { clickStatus ? "👆" : "👇"}</span>

                </div>

                <div>
                    {clickStatus && <MenuList menuDetail={Menu}/>}
                </div>
            </div>

    )
}

export default RestaurantCategory;