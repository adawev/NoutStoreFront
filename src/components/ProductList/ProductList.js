import './style.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../../store/reducers/products';

function ProductList({ getAllProducts, products }) {
    useEffect(() => {
        getAllProducts();
    }, [getAllProducts]);

    return (
        <div className="productList">
            <p className="title">All products</p>
            <p className="desc">
                This is your category description. It’s a great place to tell customers what this category is about,
                connect with your audience and draw attention to your products.
            </p>

            <div className="list-wrapper">
                {products.map((item) => (
                    <div className="card" key={item.id || item.name}>
                        {item.photos?.[0]?.name ? (
                            <img
                                src={`http://localhost:8080/uploads/${item.photos[0].name}`}
                                alt={item.name}
                            />
                        ) : (
                            <div>Downloading...</div>
                        )}
                        <h3>{item.name}</h3>
                        <p>{item.price} so'm</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = ({ products: { products } }) => ({ products });

export default connect(mapStateToProps, { getAllProducts })(ProductList);
