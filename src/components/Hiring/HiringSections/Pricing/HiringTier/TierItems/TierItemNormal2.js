import React from 'react';

import TickedBackgroundGreen from '../../../../../UI/SVG/TickedBackgroundGreen';
import TickedGreen from '../../../../../UI/SVG/TickedGreen';


const TierItemVIP = props => {
    return (
        <>
            <ul className="features-list__items">
                <li className="features-list__item ticked">
                    <TickedBackgroundGreen />
                        Job Board
                    </li>
                <li className="features-list__item">Designer Serach</li>
                <li className="features-list__item">Curated Talent Pool</li>
            </ul>
            <div className="d-flex align-items-center d-flex-col hiring-tier-meta">
                <div className="hiring-tier-price-slash">
                    $299
                    </div>
                <div className="hiring-tier-price-real">
                    <span>$</span> <h1>249</h1>
                </div>
                <div className="hiring-tier-checkout-method">
                    <p>Per month</p>
                    <p>Billed quarterly</p>
                </div>
                <a href="#sub" className="btn btn-color-white btn-radius btn-primary btn-wide">
                    Subscribe
                    </a>
            </div>
            <div className="features-list-tier">
                <ul className="hiring-features-list-group">
                    <li>1</li>
                </ul>
            </div>
            <div className="features-list-tier">
                <ul className="hiring-features-list-group">
                    <li><TickedGreen /></li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                </ul>
            </div>
            <div className="features-list-tier">
                <ul className="hiring-features-list-group">
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                </ul>
            </div>
            <div className="features-list-tier">
                <ul className="hiring-features-list-group">
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                </ul>
            </div>

            <div className="hiring-tier-title-list mobible">
                <div className="features-list-tier">
                    <h3 className="section-brand-title gray">JOB BOARD</h3>
                    <ul className="hiring-features-list-group">
                        <li>
                            <span>Job borad slot</span>
                            <span>1</span>
                        </li>
                    </ul>
                </div>
                <div className="features-list-tier">
                    <h3 className="section-brand-title gray">SEACH</h3>
                    <ul className="hiring-features-list-group">
                        <li>
                            <span>List</span>
                            <span><TickedGreen /></span>
                        </li>
                        <li>
                            <span>Role search</span>
                            <span>-</span>
                        </li>
                        <li>
                            <span>Skill search</span>
                            <span>-</span>
                        </li>
                        <li>
                            <span>Location</span>
                            <span>-</span>
                        </li>
                        <li>
                            <span>Messages</span>
                            <span>-</span>
                        </li>
                    </ul>
                </div>
                <div className="features-list-tier">
                    <h3 className="section-brand-title gray">ADDITIONAL SERACH FILTERS</h3>
                    <ul className="hiring-features-list-group">
                        <li>
                            <span>Availability</span>
                            <span>-</span>
                        </li>
                        <li>
                            <span>Relocation</span>
                            <span>-</span>
                        </li>
                        <li>
                            <span>Experience level</span>
                            <span>-</span>
                        </li>
                        <li>
                            <span>Previous experience</span>
                            <span>-</span>
                        </li>
                        <li>
                            <span>High intent candidates</span>
                            <span>-</span>
                        </li>
                    </ul>
                </div>

                <div className="features-list-tier">
                    <h3 className="section-brand-title gray">MANAGAED RECRUITING</h3>
                    <ul className="hiring-features-list-group">
                        <li>
                            <span>Dedicated Talet Manager</span>
                            <span>-</span>
                        </li>
                        <li>
                            <span>Candidate matching</span>
                            <span>-</span>
                        </li>
                        <li>
                            <span>Managed interview scheduling</span>
                            <span>-</span>
                        </li>
                        <li>
                            <span>ATS intergration</span>
                            <span>-</span>
                        </li>
                    </ul>
                </div>
                <a href="#sub" className="btn btn-color-white btn-radius btn-primary btn-wide">
                    Subscribe
                </a>
            </div>

            <div className="features-list-tier">
                <div className="hiring-features-list-group">
                    <a href="#sub" className="btn btn-color-white btn-radius btn-primary btn-wide">
                        Subscribe
                    </a>
                </div>
            </div>
        </>
    )
}

export default TierItemVIP;