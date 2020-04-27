import React, { useState } from 'react';

import CaretDownBold from '../../../../../UI/Caret/CaretDownBold';
import TickedGreen from '../../../../../UI/SVG/TickedGreen';
import InfinityGreen from '../../../../../UI/SVG/InfinityGreen';

const TierItemSearchBasic = props => {
    const [open, setOpen] = useState("close")
    return (
        <>
            <h3
                className={`section-brand-title bold dropdown ${open}`}
                onClick={() => setOpen(open === "close" ? "open" : "close")}
            >
                Looking for basic search features only?
                        <CaretDownBold />
            </h3>

            <div className="features-list-tier">
                <div className="d-flex align-items-center">
                    <h3 className="section-brand-title gray">
                        Basic Designer Search
                                <div>$199 / <span>mo</span></div>
                    </h3>
                </div>
                <ul className="hiring-features-list-group">
                    <li><TickedGreen /> 10 Messages per month</li>
                    <li><InfinityGreen /> Unlimited serach results</li>
                    <li><TickedGreen /> Private lists</li>
                    <li><TickedGreen /> Serach by skill &amp; location</li>
                </ul>

                <a style={{marginTop: "1rem"}} href="#sub" className="btn btn-color-white btn-radius btn-gray">
                    Subscribe now for $199/mo
                </a>
            </div>
        </>
    )
}

export default TierItemSearchBasic;