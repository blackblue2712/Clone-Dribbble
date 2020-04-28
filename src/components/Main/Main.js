import React from 'react';

import './Main.css';

import MainHeader from './MainHeader/MainHeader';
import MainFilter from './MainFliter/MainFilter';
import MainLib from './MainLib/MainLib';

const Main = props => {
    return (
        <>
            <MainHeader />
            <MainFilter />
            <MainLib />
        </>
    )
}

export default Main;