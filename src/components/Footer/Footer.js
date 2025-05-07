import './style.css'
import Logo from '../../assets/logo/logo.png'
import {Link} from "react-router-dom";
import Instagram from '../../assets/icons/instagram.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Google from '../../assets/icons/google.svg'

function Footer(){
    return <div className="footer-page">
        <div className="company-info">
            <img src={Logo} alt="Logo"/>
            <p>Stay updated with the latest laptops, deals, and tech news. Be the first to know about new models, sales, and special promos.</p>
        </div>
        <div className="about">
            <p className={'title'}>About</p>
            <Link to={'/'}><p className={'about-items f-item'}>Home</p></Link>
            <Link to={'/shop/products'}><p className={'about-items'}>Shop</p></Link>
            <Link to={'/services'}><p className={'about-items'}>Services</p></Link>
            <Link to={'/about-us'}><p className={'about-items'}>About us</p></Link>
        </div>
        <div className="contact-us">
            <p className={'title'}>Contact us</p>
            <p className={'txt-info f-info-txt'}>+998 99 777 77 77</p>
            <p className={'txt-info'}>noutstore@org.com</p>
            <div className="socials">
                <Link to={'/instagram'}><img src={Instagram} alt=""/></Link>
                <Link to={'/facebook'}><img src={Facebook} alt=""/></Link>
                <Link to={'/linkedin'}><img className={'lin-img'} src={Linkedin} alt=""/></Link>
                <Link to={'/google'}><img className={'google-img'} src={Google} alt=""/></Link>
            </div>
        </div>
    </div>
}
export default Footer;