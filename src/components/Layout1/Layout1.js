import LayoutPhoto from '../../assets/photos/layout1.png'
import './style.css'
import {Link} from "react-router-dom";

function Layout1(){
    return <div className="LayoutFirst">
        <img src={LayoutPhoto} alt=""/>
        <div className={'information-container'}>
            <p>Explore Our Collection</p>
            <p>Latest Laptops for Tech Enthusiasts</p>
            <Link to={'/shop'}><button className={'button-styled-transparent'}>Shop Now</button></Link>
        </div>
    </div>
}
export default Layout1;