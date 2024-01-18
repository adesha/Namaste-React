import logo from '../images/food-delivery-logo-design-template-260nw-1262110930.webp'

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

export default Header