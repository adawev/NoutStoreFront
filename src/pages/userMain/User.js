import NavBar from "../../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

function Users(){
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}
export default Users