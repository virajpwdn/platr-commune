import { LOGO_URL } from "../utils/constants"

const Header = ()=>{
    return (
        <div className="Heading">
            <div className="logo">
                <img src={LOGO_URL} alt="" />
            </div>
            <div className="navlinks">
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