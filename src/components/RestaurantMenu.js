import { useEffect,useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
const RestaurantMenu = ()=>{

    const [resInfo,setResInfo] = useState()
    const {resId}=useParams()
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu=async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0698281&lng=77.58960549999999&restaurantId='+resId+'&catalog_qa=undefined&submitAction=ENTER')
        const json=await data.json()
        console.log(json)
        setResInfo(json.data)
    }

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