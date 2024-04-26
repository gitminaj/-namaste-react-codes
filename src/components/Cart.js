import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import  {clearCart, deleteItem}  from "../utils/cartSlice";


const Cart = () =>{
    const items = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    
    const handleRemove = (index) =>{
        dispatch(deleteItem(index));
    }
    return(
        <>
        
        <div>
            <h1 className="text-center font-bold text-2xl mb-2">Cart</h1>
            <div className="w-3/5 m-auto">
                    {
                        items.map((items, index) => {
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
                                        <button className="bg-white mt-1 rounded-sm " onClick={ () => handleRemove(index)}> Remove </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <h1 className="text-center font-bold mt-2 cursor-pointer" onClick={handleClearCart}>Clear Cart</h1>
            </div>
        </div>
    </>
    )
}

export default Cart;