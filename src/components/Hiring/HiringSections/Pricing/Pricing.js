import React from 'react';

import HiringTier from './HiringTier/HiringTier';
import './Pricing.css';

const Pricing = props => {
    return (
        <section id="pricing">
            <div className="pricing-layout">
                <form className="prcing-plan">
                    <div className="width-45 d-flex align-items-center d-flex-col prcing-title">

                        <h2 className="section-title-m">
                            <span>Let's find your next designer</span>
                        </h2>

                        <p className="section-description">
                            Explore our multiple solutions to find the perfect cadidate for your needs.
                        </p>
                    </div>


                    <div className="radio-plan__items">
                        <div className="radio-plan__item">
                            <input name="prcing-plan" type="radio" id="quarterly-billing" />
                            <label htmlFor="quarterly-billing">
                                Quarterly billing
                                <span>Save up to 30%</span>
                            </label>
                        </div>
                        <div className="radio-plan__item">
                            <input name="prcing-plan" type="radio" id="monthly-billing" />
                            <label htmlFor="monthly-billing">
                                Monthly billing
                            </label>
                        </div>
                    </div>
                </form>

                <form className="pricing-choose-tier">
                    <HiringTier />
                </form>

            </div>
        </section>
    )
}

export default Pricing;