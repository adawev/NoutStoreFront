import {Route, Routes} from "react-router-dom";
import User from "./pages/userMain/User";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";

function App(){
    return (
        <div className={'container-fluid'}>
            <Routes>
                <Route path="/" element={<User/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="shop" element={<Shop/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="about-us" element={<AboutUs/>}/>
                </Route>
            </Routes>
        </div>
    )
}
export default App