import { useEffect, useState } from "react"

const useRestaurantMenu=(resId)=>{
    //fetchdata
    const[resInfo,setResInfo]=useState(null)
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0698281&lng=77.58960549999999&restaurantId='+resId+'&catalog_qa=undefined&submitAction=ENTER')
        const json=await data.json()
        //console.log(json)
        setResInfo(json.data)
    }

    return resInfo
}

export default useRestaurantMenu