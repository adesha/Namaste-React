import React from 'react'
import ReactDOM  from 'react-dom';
import logo from './images/food-delivery-logo-design-template-260nw-1262110930.webp'
import food from './images/0435a03f4d2017a0a64d90b279c2fa63.avif'
const Header=()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard=(props)=>{
    const resData={props}
    return(
        <div className='restaurant-card'>
            <img className='res-logo' alt='res-logo' src={food}/>
            <h3>Meghana Foods</h3>
            <h4>South Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const resList=[
    {},{}
]

const Body=()=>{
    return (
        <div className='body'>
            <div className='search'>Search Bar</div>
            <div className='restaurant-container'>
                {
                    resList.map((res,index)=><RestaurantCard key={index} resData={res}/>)
                }
            </div>
        </div>
    )
}
const AppLayout = ()=>{
    return(
    <div className='app'>
        <Header/>
        <Body/>
    </div>)
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);