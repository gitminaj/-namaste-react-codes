import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";


const Cart = () =>{
    const items = useSelector((store) => store.cart.items);
    console.log(items)
    return(
        <div>
            <h1 className="text-center font-bold text-2xl mb-2">Cart</h1>
            <div className="w-3/5 m-auto">
                    {
                        items.map((items) => {
                            const { id, name, description, defaultPrice, price, imageId } = items?.card?.info;
                            return (
                                <div key={id} className="flex justify-between cursor-pointer bg-gray-100">

                                    <div  className="border-b-2 p-2">
                                        <p className="font-bold py-2">{name}</p>
                                        <p className="text-xs py-2 font-bold" > ₹ {(price || defaultPrice) / 100} /-</p>
                                        <p className="text-xs py-2 font-mono">{description}</p>
                                    </div>

                                    <div className="m-3 flex flex-col">
                                        <img 
                                        src={IMG_CDN + imageId} 
                                        className="rounded-md max-w-28 h-28" 
                                        />
                                        <button className="bg-white mt-1 rounded-sm " onClick={ () => handleClick(items)}> Remove </button>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Cart;