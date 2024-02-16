import { IMG_CDN } from "../utils/constants";

const ResCard= (props)=>{
    const {name,cuisines,avgRating,cloudinaryImageId} = props?.resData?.info

    return(

        <div className="res-card">
            <img src={IMG_CDN+cloudinaryImageId}></img>
            <h3>{name} </h3>
            <h4>{cuisines.join(", ")}</h4>
            <h3>{avgRating}  stars</h3>
        </div>
    )
    
}

export default ResCard;