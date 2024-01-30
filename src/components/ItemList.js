import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

const ItemList=({items})=>{
    const dispatch=useDispatch()
    const handleAddItem=(name)=>{
        //dispatch an action
        dispatch(addItem(name))
    }
    return(
        <div>
            {items?.map((item)=>(
                <div key={item.card.info.id} 
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div>
                    <div className="py-2 w-10/12">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</span>
                    </div>
                    <p className="text-sm">{item.card.info.description}</p>
                    </div>
                    <div className="w-2/12 p-4">
                        <button 
                        className="p-2 bg-white shadow-lg m-auto"
                        onClick={()=>handleAddItem(item)}>
                            Add +</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList