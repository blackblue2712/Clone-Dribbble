import React from 'react';

import './Main.css';

import MainHeader from './MainHeader/MainHeader';
import MainFilter from './MainFliter/MainFilter';

const Main = props => {
    return (
        <>
            <MainHeader />
            <MainFilter />
        </>
    )
}

export default Main;