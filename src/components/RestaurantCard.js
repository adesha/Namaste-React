import food from '../images/0435a03f4d2017a0a64d90b279c2fa63.avif'
import { CDN_URL } from '../utils/constants'

const RestaurantCard=(props)=>{
    const {resData}=props
    // console.log(resData.info.id)

    return(
        <div className='restaurant-card p-4 m-4 w-[250px] bg-gray-200 rounded-lg hover:bg-blue-100'>
            <img className='res-logo rounded-lg' alt='res-logo' src={food}/>
            <h3 className='font-bold py-1 text-lg'>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(', ')}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

//Higher order component

export const withPromtedLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard resData={props}/>
            </div>
        )
    }
}

export default RestaurantCard