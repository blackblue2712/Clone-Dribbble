import React from 'react';

import './FilterCategories.css';
import CaretRight from '../../../UI/Caret/CaretRight';
import CaretLeft from '../../../UI/Caret/CaretLeft';

class FilterCategories extends React.Component {
    constructor() {
        super();
        this.wrapSlide = React.createRef(null);
    }

    componentDidMount() {
        
    }

    scrollLeft = () => {
        const wrapWidth = this.wrapSlide.current.offsetWidth;
        this.wrapSlide.current.scrollBy(-wrapWidth, 0);
    }

    scrollRight = () => {
        const wrapWidth = this.wrapSlide.current.offsetWidth;
        this.wrapSlide.current.scrollBy(wrapWidth, 0);
    }

    render() {
        return (
            <div className="filter-categories">
                <div 
                    className="caret caret-left"
                    onClick={this.scrollLeft}
                >
                    <CaretLeft />
                </div>
                <ul className="filter-cate__items" ref={this.wrapSlide}>
                    <li className="filter-cate__item">
                        <a href="#cate">All</a>
                    </li>
                    <li className="filter-cate__item">
                        <a href="#cate">Animation</a>
                    </li>
                    <li className="filter-cate__item">
                        <a href="#cate">Branding</a>
                    </li>
                    <li className="filter-cate__item">
                        <a href="#cate">Illustration</a>
                    </li>
                    <li className="filter-cate__item">
                        <a href="#cate">Mobile</a>
                    </li>
                    <li className="filter-cate__item">
                        <a href="#cate">Print</a>
                    </li>
                    <li className="filter-cate__item">
                        <a href="#cate">Product Design</a>
                    </li>
                    <li className="filter-cate__item">
                        <a href="#cate">Typography</a>
                    </li>
                    <li className="filter-cate__item">
                        <a href="#cate">Web Desgin</a>
                    </li>
                </ul>

                <div className="caret caret-right"
                    onClick={this.scrollRight}
                >
                    <CaretRight />
                </div>
            </div>
        )
    }
}

export default FilterCategories;