import RestaurantCard from "./RestaurantCard"
import { useState,useEffect, useContext } from "react"
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredListOfRestaurants,setFilteredListOfRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("")
    const {loggedInUser, setUserName}=useContext(UserContext)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0698281&lng=77.58960549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus=useOnlineStatus()
    //console.log('status'+ onlineStatus)
    if(onlineStatus===false){
        return(
        <h1>Looks like you lost INTERNET!!!!</h1>
        )
    }
    //normal ks variable
    // let listOfRestaurants=[
    //         {
    //             "info": {
    //               "id": "41923",
    //               "name": "California Burrito",
    //               "cloudinaryImageId": "m1acc6lhphrj4ppwpc1m",
    //               "locality": "Hebbal",
    //               "areaName": "Hebbal",
    //               "costForTwo": "₹250 for two",
    //               "cuisines": [
    //                 "Mexican",
    //                 "American",
    //                 "Salads",
    //                 "Continental",
    //                 "Keto",
    //                 "Healthy Food"
    //               ],
    //               "avgRating": 4.6,
    //             }
    //         },
    //         {
    //             "info": {
    //                 "id": "15387",
    //                 "name": "Beijing Bites",
    //                 "cloudinaryImageId": "ca0eb08d0635fd6da2e5a480fec897d0",
    //                 "locality": "E Block",
    //                 "areaName": "Sahakara Nagar",
    //                 "costForTwo": "₹450 for two",
    //                 "cuisines": [
    //                   "Chinese",
    //                   "Thai"
    //                 ],
    //                 "avgRating": 4.0,
    //             }
    //         },
    //         {  
    //             "info": {
    //                 "id": "23353",
    //                 "name": "Nandhana Palace",
    //                 "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
    //                 "locality": "E Block",
    //                 "areaName": "Sahakara Nagar",
    //                 "costForTwo": "₹500 for two",
    //                 "cuisines": [
    //                   "Biryani",
    //                   "Andhra",
    //                   "South Indian",
    //                   "North Indian"
    //                 ],
    //                 "avgRating": 4.2,
    //             }
    //         }
    // ]

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className='body'>
            <div className='filter flex items-center'>
                <div className="search m-4 p-4">
                    <input type="text" 
                    className="search-box border border-solid border-black" 
                    value={searchText} 
                    onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                     onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredListOfRestaurants(filteredRestaurant)
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4">
                    <button 
                    className="filter-btn px-4 py-2 bg-gray-100 m-4 rounded-lg" 
                    onClick={()=>{
                    const filterRestaurants=listOfRestaurants.filter(
                    (res)=>res.info.avgRating > 4
                )
                setFilteredListOfRestaurants(filterRestaurants)
                }}>
                Top Rated Restaurants
                </button>
                </div>
                <div className="">
                    <label>USERNAME : </label>
                    <input className="p-2 border border-black" 
                    value={loggedInUser}
                    onChange={(e)=>{setUserName(e.target.value)}}/>
                </div>
                </div>
            <div className='restaurant-container flex flex-wrap'>
                {/* {
                    resList.map((res)=><RestaurantCard key={res.info.id} resData={res}/>)
                } */}
                {
                    filteredListOfRestaurants.map((res)=><Link key={res.info.id}  to={'/restaurant/'+res.info.id}><RestaurantCard resData={res}/></Link>)
                }
            </div>
        </div>
    )
}

export default Body