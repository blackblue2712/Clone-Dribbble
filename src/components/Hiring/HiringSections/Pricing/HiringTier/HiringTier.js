import React from 'react';

import TierItemRecommend from './TierItems/TierItemRecommend';
import './HiringTier.css';

import TierItemNormal1 from './TierItems/TierItemNormal1';
import TierItemNormal2 from './TierItems/TierItemNormal2';
import TierItemVIP from './TierItems/TierItemVIP';
import TierItemSearchBasic from './TierItems/TierItemSerachBasic';

const HiringTier = props => {
    return (
        <>
            <div className="hiring-tier-grid">
                <div className="hiring-tier hiring-tier-title-list">
                    <div className="features-list-tier">
                        <h3 className="section-brand-title gray">JOB BOARD</h3>
                        <ul className="hiring-features-list-group">
                            <li>Job borad slot</li>
                        </ul>
                    </div>
                    <div className="features-list-tier">
                        <h3 className="section-brand-title gray">SEACH</h3>
                        <ul className="hiring-features-list-group">
                            <li>List</li>
                            <li>Role search</li>
                            <li>Skill search</li>
                            <li>Location</li>
                            <li>Messages</li>
                        </ul>
                    </div>
                    <div className="features-list-tier">
                        <h3 className="section-brand-title gray">ADDITIONAL SERACH FILTERS</h3>
                        <ul className="hiring-features-list-group">
                            <li>Availability</li>
                            <li>Relocation</li>
                            <li>Experience level</li>
                            <li>Previous experience</li>
                            <li>High intent candidates</li>
                        </ul>
                    </div>
                    <div className="features-list-tier">
                        <h3 className="section-brand-title gray">MANAGAED RECRUITING</h3>
                        <ul className="hiring-features-list-group">
                            <li>Dedicated Talet Manager</li>
                            <li>Candidate matching</li>
                            <li>Managed interview scheduling</li>
                            <li>ATS intergration</li>
                        </ul>
                    </div>
                    <div className="features-list-tier">
                        <h3 className="section-brand-title">Getting started is easy</h3>
                        <p>Choose a plan and find your next designer.</p>
                    </div>
                </div>
                <div className="hiring-tier">
                    <TierItemNormal1 />
                </div>
                <div className="hiring-tier">
                    <TierItemNormal2 />
                </div>
                <div className="hiring-tier">
                    <TierItemVIP />
                </div>
                <div className="hiring-tier hiring-tier__recommend">
                    <TierItemRecommend />
                </div>
                
                <div className="features-search-basic">
                   <TierItemSearchBasic />
                </div>
            </div>
        </>
    )
}

export default HiringTier;