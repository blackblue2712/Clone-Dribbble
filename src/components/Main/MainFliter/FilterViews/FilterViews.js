import React from 'react';
import { withRouter } from 'react-router-dom';

import FilterDropdown from '../FilterDropdown/FilterDropdown';

const fitlerViewsList = ["Popular", "New & Notewortly", "Goods for Sale"];

const FilterViews = props => {
    return (
        <FilterDropdown filterList={fitlerViewsList} />
    )
}

export default withRouter(FilterViews);