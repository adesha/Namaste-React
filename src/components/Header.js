import logo from '../images/food-delivery-logo-design-template-260nw-1262110930.webp'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header=()=>{
    const [btnName,setBtnName]=useState('Login')
    const onlineStatus=useOnlineStatus()

    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status: {onlineStatus?'🟢':'🔴'}</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href='/about'>About Us</a></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className='login' 
                    onClick={()=>{
                        btnName=='Login'?
                            setBtnName('Logout'):
                            setBtnName('Login')
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header