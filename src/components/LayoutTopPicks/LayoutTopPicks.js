import React from 'react';
import Carousel from "./Carousel/Carousel";
import './style.css'

function LayoutTopPicks() {

    return (
        <div className={'layoutTopPicks-container'}>
            <div className={'layoutTopPicks'}>
                <h1 className={'title'}>Top Picks</h1>
                <Carousel/>
            </div>
        </div>
    );
}

export default LayoutTopPicks;
