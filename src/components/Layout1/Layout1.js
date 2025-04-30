import LayoutPhoto from '../../assets/photos/layout1.png'
import './style.css'

function Layout1(){
    return <div className="LayoutFirst">
        <img src={LayoutPhoto} alt=""/>
        <div className={'information-container'}>
            <p>Explore Our Collection</p>
            <p>Latest Laptops for Tech Enthusiasts</p>
            <button>Shop Now</button>
        </div>
    </div>
}
export default Layout1;