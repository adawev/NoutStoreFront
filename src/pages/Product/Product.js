import Footer from "../../components/Footer/Footer";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getProductById} from "../../store/reducers/products";
import {useEffect} from "react";

function Product({ product, getProductById }) {
    const {id} = useParams();

    useEffect(() => {
        getProductById(id);
    }, [id, getProductById]);

    if (!product) return <div>Loading...</div>;
    return <div>
        <div>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
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