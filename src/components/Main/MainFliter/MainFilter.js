import React from 'react';

import './MainFilter.css';
import FilterViews from './FilterViews/FilterViews';
import FilterCategories from './FilterCategories/FilterCategories';
import FilterSettings from './FilterSettings/FilterSettings';
import FilterSettingsList from './FilterSettings/FilterSettingsList';

const MainFilter = props => {
    return (
        <section id="main-filter">
            <div className="section-main section-main-filter">
                <FilterViews />
                <FilterCategories />
                <FilterSettings />
            </div>
            <div className="section-main">
                <FilterSettingsList />
            </div>
        </section>
    )
}

export default MainFilter;