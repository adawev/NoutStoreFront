import './style.css'
import Photo1 from '../../assets/photos/laptopDesign1.png';
import Photo2 from '../../assets/photos/laptopDesign2.png';

function AboutUsInfo(){
    return <div className={'aboutUsInfo'}>
        <div className="top">
            <p className="title">Discover NoutStore</p>
            <img src={Photo1} alt=""/>
        </div>
        <div className="end">
            <img src={Photo2} alt=""/>
            <div className="info">
                <p className={'title'}>Who We Are</p>
                <p className={'desc'}>At NoutStore, we are passionate about providing a wide range of high-performance laptops for gaming enthusiasts, creative professionals, and everyday users. Our online store is designed to offer a seamless shopping experience, ensuring you find the perfect tech companion for your unique needs. Join us in the world of digital innovation!</p>
                <button className={'button-styled-transparent'}>Learn More</button>
            </div>
        </div>
    </div>

}export default AboutUsInfo