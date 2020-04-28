import React from 'react';

import HiriginNavTop from './HiringNavTop/HiringNavTop';
import SectionOverview from './HiringSections/Overview/Overview';
import SectionJobBoard from './HiringSections/JobBoard/JobBoard';
import SectionDesignerSearch from './HiringSections/DesignerSearch/DesignerSerach';
import SectionCuratedTalentPool from './HiringSections/CuratedTalentPool/CuratedTalentPool';
import SectionPricing from './HiringSections/Pricing/Pricing';

import "./HiringMain.css";

class HiringMain extends React.Component {

    render() {
        return (
            <div className="hiring-main">
                <HiriginNavTop />
                <SectionOverview />
                <SectionJobBoard />
                <SectionDesignerSearch />
                <SectionCuratedTalentPool />
                <SectionPricing />
            </div>
        )
    }
}

export default HiringMain;