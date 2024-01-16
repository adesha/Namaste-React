import React from 'react'
import ReactDOM  from 'react-dom';
import logo from './images/food-delivery-logo-design-template-260nw-1262110930.webp'

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

const RestaurantCard=()=>{
    return(
        <div className='restaurant-card'>
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body=()=>{
    return (
        <div className='body'>
            <div className='search'>Search Bar</div>
            <div className='restaurant-container'>
                <RestaurantCard/>
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