    import {ReactComponent as User} from '../../assets/icons/user.svg';
import {ReactComponent as ShoppingCard} from '../../assets/icons/shopping-cart.svg';
import Logo from '../../assets/logo/logo.png';
import './style.css'
import {Link} from "react-router-dom";

function NavBar() {
    return <div className={'navbar'}>
        <div className="logo">
            <Link to={'/'}>
                <img src={Logo} alt="Logo" className='width-5'/>
            </Link>
        </div>
        <div className="nav-item-container">
            <Link to="/">
                <div className="nav-item">Home</div>
            </Link>
            <Link to="/shop">
                <div className="nav-item">Shop</div>
            </Link>
        </div>
        <div className="nav-end">
            <Link to={'/shopping-cart'}>
                <ShoppingCard width={24} height={24}/>
            </Link>
            <Link to={'/account'}>
                <User width={24} height={24}/>
            </Link>
        </div>
    </div>
}

export default NavBar;