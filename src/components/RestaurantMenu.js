import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = ()=>{

    const {resId}=useParams()

    const resInfo=useRestaurantMenu(resId)

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards}=
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    console.log(itemCards)
    return resInfo===null ? <Shimmer/> : 
    (
        <div className="Menu">
            <h1>{name}</h1>
             <h2>{cuisines?.join(", ")} - {costForTwoMessage}</h2>
            <h1>Menu</h1>
            <ul>
            {itemCards?.map((item)=>
                <li>{item.card.info.name} - Rs {item.card.info.price/100}</li>
            )}
            </ul>
        </div>
    )
}

export default RestaurantMenu