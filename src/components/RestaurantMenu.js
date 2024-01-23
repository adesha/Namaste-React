import { useEffect,useState } from "react"
import Shimmer from "./Shimmer"

const RestaurantMenu = ()=>{

    const [resInfo,setResInfo] = useState()

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu=async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0698281&lng=77.58960549999999&restaurantId=111687&catalog_qa=undefined&submitAction=ENTER')
        const json=await data.json()
        console.log(json)
        setResInfo(json.data)
    }

    const {name} = resInfo?.cards[0]?.card?.card?.info;

    return resInfo===null ? <Shimmer/> : 
    (
        <div className="Menu">
            <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
            <h2>{name}</h2>
            <ul>
                <li>Biriyani</li>
                <li>Burger</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu