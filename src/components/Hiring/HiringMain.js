import React from 'react';

import HiriginNavTop from './HiringNavTop/HiringNavTop';
import SectionOverview from './HiringSections/Overview/Overview';
import SectionJobBoard from './HiringSections/JobBoard/JobBoard';

import "./HiringMain.css";

class HiringMain extends React.Component {

    render() {
        return (
            <div className="hiring-main">
                <HiriginNavTop />
                <SectionOverview />
                <SectionJobBoard />
            </div>
        )
    }
}

export default HiringMain;