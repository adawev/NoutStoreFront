import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";

function App(){
    return (
        <div className={'container-fluid'}>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route index element={<Home/>}/>
            </Routes>
        </div>
    )
}
export default App