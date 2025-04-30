import React, { useRef, useState } from 'react';
import './LaptopCarousel.css';


const products = [
    {
        title: "High-End Ultrabook",
        price: "1,399,000 сум",
        image: "https://static.wixstatic.com/media/ee1b5a_bc05cee91a724971af26e255b82bef1c~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee1b5a_bc05cee91a724971af26e255b82bef1c~mv2.png"
    },
    {
        title: "High-End Ultrabook",
        price: "1,399,000 сум",
        image: "https://static.wixstatic.com/media/ee1b5a_e71a401aab4945929a77023f7daba10e~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee1b5a_e71a401aab4945929a77023f7daba10e~mv2.png"
    },
    {
        title: "High-End Ultrabook",
        price: "1,399,000 сум",
        image: "https://static.wixstatic.com/media/ee1b5a_7f583628b1ca4ef3939db697de77fa64~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee1b5a_7f583628b1ca4ef3939db697de77fa64~mv2.png"
    },
    {
        title: "High-End Ultrabook",
        price: "1,399,000 сум",
        image: "https://static.wixstatic.com/media/ee1b5a_c8e2937c3d924635a8c43fbd07d51b14~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee1b5a_c8e2937c3d924635a8c43fbd07d51b14~mv2.png"
    },
    {
        title: "High-End Ultrabook",
        price: "1,399,000 сум",
        image: "https://static.wixstatic.com/media/ee1b5a_da0c4d272c3b43519f225616166f4df9~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee1b5a_da0c4d272c3b43519f225616166f4df9~mv2.png"
    },
    {
        title: "High-End Ultrabook",
        price: "1,399,000 сум",
        image: "https://static.wixstatic.com/media/ee1b5a_af3e7e6a2c5e46b8964e4d4c9fa1d9d7~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee1b5a_af3e7e6a2c5e46b8964e4d4c9fa1d9d7~mv2.png"
    },

    {
        title: "Sleek Ultrabook",
        price: "899,000 сум",
        image: "https://static.wixstatic.com/media/ee1b5a_4d5090b10cb7450d83023a8f30345123~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee1b5a_4d5090b10cb7450d83023a8f30345123~mv2.png"
    },
    {
        title: "High Performance Gaming Laptop",
        price: "999,000 сум",
        image: "https://static.wixstatic.com/media/ee1b5a_011004e9485a4dae84a96083b565fb99~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee1b5a_011004e9485a4dae84a96083b565fb99~mv2.png"
    },
    {
        title: "Budget Laptop",
        price: "599,000 сум",
        image: "https://static.wixstatic.com/media/ee1b5a_d6ec4ea606304647a0646b2335b4bf21~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee1b5a_d6ec4ea606304647a0646b2335b4bf21~mv2.png"
    },

];

const ITEMS_PER_PAGE = 3;

function LaptopCarousel() {
    const [index, setIndex] = useState(0);
    const trackRef = useRef(null);

    const maxIndex = Math.ceil(products.length / ITEMS_PER_PAGE) - 1;

    const handleNext = () => {
        const newIndex = index >= maxIndex ? 0 : index + 1;
        setIndex(newIndex);
        trackRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    };

    const handlePrev = () => {
        const newIndex = index <= 0 ? maxIndex : index - 1;
        setIndex(newIndex);
        trackRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button left" onClick={handlePrev}>&#8592;</button>
            <div className="carousel-track-wrapper">
                <div className="carousel-track" ref={trackRef}>
                    {products.map((item, i) => (
                        <div className="card" key={i}>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="carousel-button right" onClick={handleNext}>&#8594;</button>
        </div>
    );
}

export default LaptopCarousel;
