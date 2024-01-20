import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockdata"

const Body=()=>{
    return (
        <div className='body'>
            <div className='filter-btn'>Search Bar</div>
            <div className='restaurant-container'>
                {
                    resList.map((res)=><RestaurantCard key={res.info.id} resData={res}/>)
                }
            </div>
        </div>
    )
}

export default Body