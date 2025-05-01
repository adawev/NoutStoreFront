import './style.css'
import Laptop from '../../assets/photos/laptop1.avif'
import Lapto2 from '../../assets/photos/laptop2.avif'
import Lapto3 from '../../assets/photos/laptop3.avif'
import Lapto4 from '../../assets/photos/laptop4.avif'
import Lapto5 from '../../assets/photos/laptop5.avif'
import Lapto6 from '../../assets/photos/laptop6.avif'
import Lapto7 from '../../assets/photos/laptop7.avif'
import Lapto8 from '../../assets/photos/laptop8.avif'
import Lapto9 from '../../assets/photos/laptop9.avif'

function ProductList(){
    return (<div className="productList">
        <p className={'title'}>All products</p>
        <p className={'desc'}>This is your category description. It’s a great place to tell customers what this category is about, connect with your audience and draw attention to your products.</p>
        <div className="list-wrapper">
            <div className="card">
                <img src={Laptop} alt=""/>
                <h3>Compact Gaming Laptop</h3>
                <p>849,000 sum</p>
            </div>
            <div className="card">
                <img src={Lapto2} alt=""/>
                <h3>Compact Gaming Laptop</h3>
                <p>849,000 sum</p>
            </div>
            <div className="card">
                <img src={Lapto3} alt=""/>
                <h3>Compact Gaming Laptop</h3>
                <p>849,000 sum</p>
            </div>
            <div className="card">
                <img src={Lapto4} alt=""/>
                <h3>Compact Gaming Laptop</h3>
                <p>849,000 sum</p>
            </div>
            <div className="card">
                <img src={Lapto5} alt=""/>
                <h3>Compact Gaming Laptop</h3>
                <p>849,000 sum</p>
            </div>
            <div className="card">
                <img src={Lapto6} alt=""/>
                <h3>Compact Gaming Laptop</h3>
                <p>849,000 sum</p>
            </div>
            <div className="card">
                <img src={Lapto7} alt=""/>
                <h3>Compact Gaming Laptop</h3>
                <p>849,000 sum</p>
            </div>
            <div className="card">
                <img src={Lapto8} alt=""/>
                <h3>Compact Gaming Laptop</h3>
                <p>849,000 sum</p>
            </div>
            <div className="card">
                <img src={Lapto9} alt=""/>
                <h3>Compact Gaming Laptop</h3>
                <p>849,000 sum</p>
            </div>
        </div>
    </div>)
}
export default ProductList;