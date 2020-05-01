import React from 'react';

import HiriginNavTop from './HiringNavTop/HiringNavTop';
import SectionOverview from './HiringSections/Overview/Overview';
import SectionJobBoard from './HiringSections/JobBoard/JobBoard';
import SectionDesignerSearch from './HiringSections/DesignerSearch/DesignerSerach';
import SectionCuratedTalentPool from './HiringSections/CuratedTalentPool/CuratedTalentPool';
import SectionPricing from './HiringSections/Pricing/Pricing';

import "./HiringMain.css";

class HiringMain extends React.Component {
    constructor() {
        super();
        this.sections = [];
        this.navItems = [];
    }

    componentDidMount() {
        this.sections = Array.from(document.querySelectorAll('section'));
        this.navItems = Array.from(document.querySelectorAll('.hiring-nav__item'));
        document.addEventListener('scroll', this.activeNav);
    }

    activeNav = () => {
        try {
            for(let i in this.sections) {
                this.navItems[i].classList.remove('active');
                if(window.pageYOffset >= this.sections[i].offsetTop -100 && this.sections[i].offsetTop + this.sections[i].offsetHeight >= window.pageYOffset) {
                    this.navItems[i].classList.add('active');
                }
            }
        } catch(err) {
            console.log(err)
        }
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.activeNav);
    }

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