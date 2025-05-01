import Navbar from "../../components/Navbar/Navbar";
import Layout1 from "../../components/Layout1/Layout1";
import LayoutTopPicks from "../../components/LayoutTopPicks/LayoutTopPicks";
import LayoutCenter from "../../components/LayoutCenter/LayoutCenter";
import './style.css'
import Footer from "../../components/Footer/Footer";

function Home(){
    return <div className={'home-page'}>
        <Navbar/>
        <Layout1/>
        <LayoutTopPicks/>
        <LayoutCenter/>
        <Footer/>
    </div>
}
export default Home;