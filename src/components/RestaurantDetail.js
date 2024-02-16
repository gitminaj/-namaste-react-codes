import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantDetail = () =>{

    const [resInfo, setResInfo] = useState([]);

    const {resId} = useParams();

    console.log(resId)


    useEffect(()=>{
        getData();
    },[]);

    const  getData = async () =>{
        
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" + resId);
        const json = await data.json();
        setResInfo(json?.data);
        console.log(resInfo)
    }

    if (resInfo?.length === 0) return <Shimmer/>
    
    
        const {name,cuisines,avgRating,totalRatingsString} = resInfo?.cards[0]?.card?.card?.info;
        const {itemCards,title} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    return(

        <div>
            <h1>{name}</h1>
            <p>
                {cuisines?.join(", ")}<br/>
                {avgRating} - {totalRatingsString}
            </p><br/>

            <h2>{title}</h2>
            <ul>
                {itemCards?.map((res)=> <li key={res?.card?.info?.id}>{res?.card?.info?.name}</li>)}
            </ul>

        </div>

    )

}

export default RestaurantDetail;