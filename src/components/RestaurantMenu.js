import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = ()=>{

    const {resId}=useParams()

    const resInfo=useRestaurantMenu(resId)

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards}=
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    //console.log(itemCards)

    const category=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(category)

    return resInfo===null ? <Shimmer/> : 
    (
        <div className="Menu text-center">
            <h1 className="font-bold my-2 text-3xl">{name}</h1>
            <h2 className="font-bold text-xl">{cuisines?.join(", ")} - {costForTwoMessage}</h2>

            {category.map((cat)=><RestaurantCategory key={cat.card.card.title} data={cat?.card?.card}/>)}
        </div>
    )
}

export default RestaurantMenu