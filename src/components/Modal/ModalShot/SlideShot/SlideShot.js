import React from 'react';

import './SlideShot.css';
import ViewFull from '../../../UI/SVG/Shots/ViewFull';
import CaretDownBold from '../../../UI/Caret/CaretDownBold';

class SlideShot extends React.Component {
    constructor(props) {
        super(props);
        this.oneElement = React.createRef(null);
        this.mediaInner = React.createRef(null);
        this.oneElementWidth = 0;
        this.currentElement = 0;

        this.controlImages = [
            props.image,
            'https://cdn.dribbble.com/users/930118/screenshots/11207749/media/6f493a40834de8d82829aa3266b0cc5f.png',
            'https://cdn.dribbble.com/users/648922/screenshots/11206395/media/5998f56329eda70b71fecd050032bc21.png'
        ];

        this.controlItem = null;
    }

    componentDidMount() {
        this.oneElementWidth = this.oneElement.current.offsetWidth;
        this.controlItem = Array.from(document.querySelectorAll('.slide-control__item'));
        if(this.controlItem) {
            this.controlItem[0].classList.add("active")
        }
    }

    changeSlideImage = n => {
        if (n >= this.controlImages.length) {
            n = this.controlImages.length - 1;
        } else if (n < 1) {
            n = 0;
        }

        this.currentElement = n;
        this.activeSlideControlItem(n)
        this.mediaInner.current.scroll((n * this.oneElementWidth), 0);
    }

    activeSlideControlItem = n => {
        if(this.controlItem) {
            this.controlItem.forEach(item => {
                item.classList.remove('active')
            })
            this.controlItem[n].classList.add('active')
        }
    }

    render() {

        return (
            <div className="slide-shots">
                <div className="media-slide">
                    <div className="media-container">
                        <div
                            className="media-inner"
                            ref={this.mediaInner}
                        >
                            {
                                this.controlImages.map((img, i) => {
                                    return (
                                        <img key={i} ref={this.oneElement} alt="big" src={img} />
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div title="View full image" className="media-viewmode-full">
                        <ViewFull />
                    </div>
                    <div className="media-slide-controls">
                        <div className="control-overlay prev" onClick={() => this.changeSlideImage(this.currentElement - 1)}>
                            <a className="prev" href="#prev">
                                <CaretDownBold />
                            </a>
                        </div>
                        <div className="control-overlay next" onClick={() => this.changeSlideImage(this.currentElement + 1)}>
                            <a className="next" href="#next">
                                <CaretDownBold />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="slide-control__items">
                    {
                        this.controlImages.map((img, i) => {
                            return (
                                <a
                                    href="#ct" className="slide-control__item"
                                    onClick={() => this.changeSlideImage(i)}
                                    key={i}
                                >
                                    <img src={img} alt="mda" />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SlideShot;