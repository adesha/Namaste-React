import food from '../images/0435a03f4d2017a0a64d90b279c2fa63.avif'
import { CDN_URL } from '../utils/constants'

const RestaurantCard=(props)=>{
    const {resData}=props
    
    return(
        <div className='restaurant-card'>
            <img className='res-logo' alt='res-logo' src={food}/>
            <h3>{resData.info.name}</h3>
            <h4>South Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard