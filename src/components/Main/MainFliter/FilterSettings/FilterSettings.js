import React from 'react';

import './FilterSettings.css';
import FilterIcon from '../../../UI/SVG/Filter';

const FilterSettings = props => {

    const openFilterSettingsItems = () => {
        const wrapElement = document.getElementById('js-open-settings');
        if(wrapElement) {
            if(!Array.from(wrapElement.classList).includes('open')) {
                wrapElement.classList.add('open');
                wrapElement.classList.remove('close');
            } else {
                wrapElement.classList.add('close');
                wrapElement.classList.remove('open');
            }
        }
    }
    
    return (
        <div className="filter-settings">
            <a
                href="#filter" className={`filter-settings__title`}
                onClick={openFilterSettingsItems}
            >
                <FilterIcon /> <span>Filters</span>
            </a>
        </div>
    )
}

export default FilterSettings;