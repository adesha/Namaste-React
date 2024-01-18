import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockdata"

const Body=()=>{
    return (
        <div className='body'>
            <div className='search'>Search Bar</div>
            <div className='restaurant-container'>
                {
                    resList.map((res)=><RestaurantCard resData={res}/>)
                }
            </div>
        </div>
    )
}

export default Body