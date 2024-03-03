import { useEffect,useState } from "react";

const useRestaurantDetail = (resId) =>{


    const [resInfo, setResInfo] = useState([]);
    useEffect( ()=>{
        getData();
    },[])

    async function getData(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+resId);

        const json = await data.json();

        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantDetail;