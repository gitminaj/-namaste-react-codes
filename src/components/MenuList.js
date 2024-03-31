import { IMG_CDN } from "../utils/constants";

const MenuList = ({ menuDetail }) => {

    console.log(menuDetail)

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

                            <div className="m-3">
                                <img 
                                src={IMG_CDN + imageId} 
                                className="rounded-md w-32 h-28" 
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuList;