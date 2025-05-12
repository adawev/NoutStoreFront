import Footer from "../../components/Footer/Footer";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getProductById} from "../../store/reducers/products";
import {useEffect} from "react";
import logo1 from '../../assets/icons/google.svg'
import logo2 from '../../assets/icons/facebook.svg'
import logo3 from '../../assets/icons/linkedin.svg'
import logo4 from '../../assets/icons/instagram.svg'
import {Rating} from "@mui/material";

function Product({product, getProductById}) {
    const {id} = useParams();

    useEffect(() => {
        getProductById(id);
    }, [id, getProductById]);

    if (!product) return <div>Loading...</div>;
    return <div>
        <div style={{width: '70%', margin: '50px auto',}}>
            <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                {product.photos?.[0]?.name ? (
                    <img
                        src={`http://localhost:8080/uploads/${product.photos[0].name}`}
                        alt={product.name}
                    />
                ) : (
                    <div>Downloading...</div>
                )}
                <div style={{width: '45%'}}>
                    <h1 style={{fontWeight: '600'}}>{product.name}</h1>
                    <p style={{fontWeight: '600'}}>Price: ${product.price}</p>
                    <p style={{fontWeight: '600'}}>Description: {product.description}</p>
                    <Rating name="read-only" value={product.grade_count} readOnly/>
                    <br/>
                    <br/>
                    <button className={'btn'} style={{width: '60%', borderRadius: '5px', background: '#212529', color: '#fff'}}>Add to Cart
                    </button>

                    <div className="socials"
                         style={{display: 'flex', justifyContent: 'space-around', width: '60%', marginTop: '50px'}}>
                        <img src={logo1} alt="Logo" style={{width: '30px', cursor: 'pointer'}}/>
                        <img src={logo2} alt="Logo" style={{width: '30px', cursor: 'pointer'}}/>
                        <img src={logo3} alt="Logo" style={{width: '30px', cursor: 'pointer'}}/>
                        <img src={logo4} alt="Logo" style={{width: '30px', cursor: 'pointer'}}/>
                    </div>
                </div>
            </div>
            <p style={{marginTop:" 60px", marginBottom: '60px', fontSize: '20px'}}>{product.description}</p>
        </div>

        <Footer/>
    </div>
}

const mapStateToProps = (state) => ({
    product: state.products.productDetail,
});

// Dispatch → props
const mapDispatchToProps = {
    getProductById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);