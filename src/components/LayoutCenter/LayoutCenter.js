import './style.css'

function LayoutCenter(){
    return <div className={'layoutCenter'}>
        <p className={'title'}>About NoutStore</p>
        <p className={'title-slogan'}>
            NoutStore, located in Tashkent Sergeli, is your go-to destination for cutting-edge laptops. We pride ourselves on offering a wide range of laptops to suit every need, from professional workstations to gaming rigs.
        </p>
        <div className={'wrapperInfo'}>
            <p>Our mission is to provide tech enthusiasts with the latest in computing technology, ensuring they stay ahead in this ever-evolving digital world. With a focus on quality and innovation, NoutStore is committed to delivering the best laptops and tech solutions.</p>
            <button className={'button-styled-transparent'}>Load More</button>
            <img src={"https://static.wixstatic.com/media/ee1b5a_dac2cae8a1d34f3b885c86914bd767fe~mv2.jpg"} alt="Image not found!"/>
        </div>
    </div>
}
export default LayoutCenter;