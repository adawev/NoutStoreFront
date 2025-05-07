import {Route, Routes} from "react-router-dom";
import User from "./pages/userMain/User";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import AddProduct from "./pages/AddProduct/AddProduct";
import Product from "./pages/Product/Product";

function App(){
    return (
        <div className={'container-fluid'}>
            <Routes>
                <Route path="/" element={<User/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="shop/products" element={<Shop/>}/>
                    <Route path="shop/products/:id" element={<Product/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="about-us" element={<AboutUs/>}/>

                    //add product
                    <Route path={'add-product'} element={<AddProduct/>}/>
                </Route>
            </Routes>
        </div>
    )
}
export default App