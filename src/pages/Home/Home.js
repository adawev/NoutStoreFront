import Navbar from "../../components/Navbar/Navbar";
import Layout1 from "../../components/Layout1/Layout1";
import LayoutTopPicks from "../../components/LayoutTopPicks/LayoutTopPicks";
import LayoutCenter from "../../components/LayoutCenter/LayoutCenter";
import './style.css'

function Home(){
    return <div className={'home-page'}>
        <Navbar/>
        <Layout1/>
        <LayoutTopPicks/>
        <LayoutCenter/>
    </div>
}
export default Home;