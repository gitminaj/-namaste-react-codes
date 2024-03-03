import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantDetail from "../utils/useRestaurantDetail";

const RestaurantDetail = () =>{

    const {resId} = useParams();

    const resInfo = useRestaurantDetail(resId);


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