import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockdata"
import { useState } from "react"

const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState(resList);

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
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={()=>{
                    const filterRestaurants=listOfRestaurants.filter(
                    (res)=>res.info.avgRating > 4
                )
                setListOfRestaurants(filterRestaurants)
                }}>
                Top Rated Restaurants
                </button>
                </div>
            <div className='restaurant-container'>
                {/* {
                    resList.map((res)=><RestaurantCard key={res.info.id} resData={res}/>)
                } */}
                {
                    listOfRestaurants.map((res)=><RestaurantCard key={res.info.id} resData={res}/>)
                }
            </div>
        </div>
    )
}

export default Body