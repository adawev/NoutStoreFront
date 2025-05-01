import './style.css'
import Delivery from '../../assets/photos/delivery.jpg'
import Call from '../../assets/photos/call.jpg'
import Warranty from '../../assets/photos/warranty.jpg'

function ServicesInfo(){
    return <div className="servicesInfo">
        <p className="title">Our Services</p>
        <p className="desc">Discover a wide range of services tailored to meet your laptop needs. From repairs to upgrades, we've got you covered.</p>
        <div className="information-wrapper">
            <div className="information-item">
                <img src={Delivery} alt=""/>
                <p className="title">Fast & Reliable Delivery</p>
                <p className="description">
                    We understand how important it is to receive your new laptop quickly and in perfect condition. That’s why we offer fast, safe, and nationwide delivery services. Whether you’re ordering from a major city or a remote town, we ensure your laptop arrives on time and securely packed.
                </p>
            </div>
            <div className="information-item">
                <img src={Call} alt=""/>
                <p className="title">Technical Support</p>
                <p className="description">
                    Not tech-savvy? No problem. Our team provides complete setup assistance, including software installation, driver updates, and personalized configuration. We also offer continued technical support to help you troubleshoot any issues and keep your device running smoothly.
                </p>
            </div>
            <div className="information-item">
                <img src={Warranty} alt=""/>
                <p className="title">Official Warranty </p>
                <p className="description">Every laptop we sell comes with a manufacturer’s warranty, so you can buy with confidence. Additionally, if you're not satisfied with your purchase, we offer a simple and transparent 7-day return policy, no questions asked. Customer satisfaction is our top priority.</p>
            </div>
        </div>
    </div>
}
export default ServicesInfo;