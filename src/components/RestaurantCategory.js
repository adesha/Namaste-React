import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory=({data})=>{

    const [showItem,setShowItem]=useState(false)
    const handleClick=()=>{
        if(showItem){
            setShowItem(false)
        }
        else{
            setShowItem(true)
        }
    }
    // console.log(data)
    //Accordian
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
            {/* Accordian Header */}
            <div className="flex justify-between cursor-pointer"
            onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* Accordian Body */}
            <div>
                {showItem && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory