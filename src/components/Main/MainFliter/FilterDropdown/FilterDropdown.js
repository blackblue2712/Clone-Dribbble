import React, { useState } from 'react';

import './FilterDropdown.css';
import CaretDown from '../../../UI/Caret/CaretDown';

const FilterDropdown = props => {
    const [open, setOpen] = useState("close");
    const [filterViewMode, setfilterViewMode] = useState(props.filterList[0]);

    const toggleFilterViews = () => {
        if (open === 'open') {
            setOpen('close');
        } else {
            setOpen('open');
            document.getElementById("root").addEventListener("click", closeFiterViews);
        }
    }

    const closeFiterViews = () => {
        setTimeout(() => {
            setOpen("close");
            document.getElementById("root").removeEventListener("click", closeFiterViews);
        }, 0)
    }

    const renderFilterViews = () => {
        return props.filterList.map((item, i) => {
            if(!props.filterImages) {
                return (
                    <li key={item} className="filter-views__item">
                        <a
                            href={`#${item}`}
                            onClick={() => setfilterViewMode(item)}
                        >{item}</a>
                    </li>
                )
            } else {
                return (
                    <li key={item} className="filter-views__item">
                        <a
                            href={`#${item}`}
                            onClick={() => setfilterViewMode(item)}
                        >
                            {props.filterImages[i]} {item}
                        </a>
                    </li>
                )
            }
        })
    }

    return (
        <div className="filter-views">
            <a
                href="#filter" className={`filter-views__title ${open}`}
                onClick={toggleFilterViews}
            >
                <span>{filterViewMode}</span> <CaretDown />
            </a>
            <ul className="filter-views__items">
                {renderFilterViews()}
            </ul>
        </div>
    )
}

export default FilterDropdown;
