import logo from '../images/food-delivery-logo-design-template-260nw-1262110930.webp'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'

const Header=()=>{
    const [btnName,setBtnName]=useState('Login')
    const onlineStatus=useOnlineStatus()
    const {loggedInUser} = useContext(UserContext)
    //console.log(loggedInUser)
    return(
        <div className='flex justify-between shadow-lg bg-yellow-50'>
            <div className='logo-container'>
                <img className='w-36' src={logo}/>
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>Online Status: {onlineStatus?'🟢':'🔴'}</li>
                    <li className='px-4'><Link to='/'>Home</Link></li>
                    <li className='px-4'><a href='/about'>About Us</a></li>
                    <li className='px-4'><Link to='/contact'>Contact Us</Link></li>
                    <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
                    <li className='px-4 font-bold'>{loggedInUser}</li>
                    <button className='login px-4' 
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