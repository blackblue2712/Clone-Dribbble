import React from 'react';

import ViewFull from '../../../UI/SVG/Shots/ViewFull';
import CaretDownBold from '../../../UI/Caret/CaretDownBold';


const SlideShot = props => {
    return (
        <div className="slide-shots">
            <div className="media-slide">
                <img alt="big" src={props.image} />
                <div title="View full image" className="media-viewmode-full">
                    <ViewFull />
                </div>
                <div className="media-slide-controls">
                    <div className="control-overlay prev">
                        <a className="prev" href="#prev">
                            <CaretDownBold />
                        </a>
                    </div>
                    <div className="control-overlay next">
                        <a className="next" href="#next">
                            <CaretDownBold />
                        </a>
                    </div>
                </div>
            </div>
            <div className="slide-control__items">
                <a
                    href="#ct" className="slide-control__item"
                >
                    <img src={props.image} alt="mda" />
                </a>
                <a href="#ct" className="slide-control__item">
                    <img src="https://cdn.dribbble.com/users/747805/screenshots/11123132/media/2ace96289b8dd3c307d80084ece96169.jpg" alt="mda" />
                </a>
            </div>
        </div>
    )
}

export default SlideShot;