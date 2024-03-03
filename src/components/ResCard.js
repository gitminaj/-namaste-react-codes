import { IMG_CDN } from "../utils/constants";

const ResCard= (props)=>{
    const {name,cuisines,avgRating,cloudinaryImageId} = props?.resData?.info

    return(

        <div className="flex flex-col w-56 h-[22rem] ml-5 mb-2 items-center justify-between rounded-md p-2 hover:shadow-2xl">
            <img src={IMG_CDN+cloudinaryImageId} className="rounded-md w-52 h-48"></img>
            <h3>{name} </h3>
            <h4>{cuisines.join(", ")}</h4>
            <h3>{avgRating}  stars</h3>
        </div>
    )
    
}

export default ResCard;