import React from 'react';

import './MainLib.css';
import ShotsList from './Shots/ShotsList';

const MainLib = props => {
    return (
        <section id="main-lib" style={{paddingTop: "0"}}>
            <div className="section-main">
                <div className="shots-grid">
                    <ShotsList />
                </div>
            </div>
        </section>
    )
}

export default MainLib;