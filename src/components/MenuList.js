import { IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"

const MenuList = ({ menuDetail }) => {

    const dispatch = useDispatch();

    const handleClick = (items) =>{
        dispatch(addItem(items))
    }

    return (
        <div>
            {
                menuDetail?.itemCards.map((items) => {
                    const { id, name, description, defaultPrice, price, imageId } = items?.card?.info;
                    return (
                        <div key={id} className="flex justify-between cursor-pointer bg-slate-300">

                            <div  className="border-b-2 p-2">
                                <p className="font-bold py-2">{name}</p>
                                <p className="text-xs py-2" > ₹ {(price || defaultPrice) / 100} /-</p>
                                <p className="text-xs py-2">{description}</p>
                            </div>

                            <div className="m-3 flex flex-col justify-end">
                                <img 
                                src={IMG_CDN + imageId} 
                                className="rounded-md max-h-28 max-w-28" 
                                />
                                <button className="bg-white mt-1 rounded-sm " onClick={ () => handleClick(items)}> Add </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuList;