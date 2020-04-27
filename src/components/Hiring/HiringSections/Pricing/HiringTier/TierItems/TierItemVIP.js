import React from 'react';

import TickedBackgroundGreen from '../../../../../UI/SVG/TickedBackgroundGreen';
import TickedGreen from '../../../../../UI/SVG/TickedGreen';
import InfinityGreen from '../../../../../UI/SVG/InfinityGreen';


const TierItemVIP = props => {
    return (
        <>
            <ul className="features-list__items">
                <li className="features-list__item ticked">
                    <TickedBackgroundGreen />
                        Job Board
                    </li>
                <li className="features-list__item ticked">
                    <TickedBackgroundGreen />
                        Designer Serach
                    </li>
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
                    <li><TickedGreen /></li>
                    <li><TickedGreen /></li>
                    <li><TickedGreen /></li>
                    <li><InfinityGreen /></li>
                </ul>
            </div>
            <div className="features-list-tier">
                <ul className="hiring-features-list-group">
                    <li><TickedGreen /></li>
                    <li><TickedGreen /></li>
                    <li><TickedGreen /></li>
                    <li><TickedGreen /></li>
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