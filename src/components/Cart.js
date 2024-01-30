import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart=()=>{
    const items=useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    console.log(items)
    return(
        <div className="text-center p-4 m-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 bg-black text-white m-2 rounded-lg"
                onClick={handleClearCart}>
                    Clear ALL</button>
                <ItemList items={items}/>
                {items.length === 0 && <h1 className="p-2 m-2 text-lg">Add items to the Cart...</h1>}
            </div>
        </div>
    )
}

export default Cart