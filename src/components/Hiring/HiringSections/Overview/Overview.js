import React from 'react';

import './Overview.css';
import SectionBigImage from '../../../../assets/images/section-overview-1.jpg';
import LgStarbucks from './LogoClientSvg/Starbucks';
import Facebook from './LogoClientSvg/Facebook';
import Amazon from './LogoClientSvg/Amazon';
import Salesforce from './LogoClientSvg/Salesforce';
import Mailchimp from './LogoClientSvg/Mailchimp';
import Vimeo from './LogoClientSvg/Vimeo';
import Ghost from './LogoClientSvg/Ghost';
import WalmartLabs from './LogoClientSvg/WalmartLabs';
import Thoughtbot from './LogoClientSvg/Thoughtbot';
import Asana from './LogoClientSvg/Asana';
import GoodMoney from './LogoClientSvg/GoodMoney'
import Client from '../../../../assets/images/client-1.png';

const Overview = props => {
    return (
        <section id="overview">
            <div className="section-inner">
                <div className="width-45">
                    <div className="section-brand-title">DRIBBBLE HIRING</div>
                    <h1 className="section-title">
                        <span>Hire the world's top</span>
                        <span>designers</span>
                    </h1>

                    <p className="section-description bold">
                        Our hiring products help you to attract, engage, and connect with qualified candidates faster
                        than ever. Find out why the world's best companies trust Dribbble when hiring design talent.
                    </p>

                    <a className="btn-section btn btn-primary btn-color-white btn-radius" href="#hiring">I'm ready to start hiring</a>
                </div>
            </div>
            <div className="section-big-image">
                <img src={SectionBigImage} alt="big" />
                <div className="section-inner">
                    <div className="section-overlap section-overview-shared">
                        <h2 className="section-title-m">
                            Connect with the world's leading design community
                        </h2>
                        <p className="section-description">
                            Dribbble is the go-to resource for discovering and connecting with designers and creative talent around the globe.
                            Our invite-only portfolio profile is an industry standard and a must-have for professional working designers.
                        </p>
                    </div>

                    <div className="section-overiew-list">
                        <ul className="section-overiew__items">
                            <li className="section-overiew__item">
                                <h3 className="section-title-s">We know designers</h3>
                                <p className="section-description-m">
                                    Dribbble is one of the largest global design and product communities
                                    and a destination for millions of designers and design enthusiasts every month.
                                </p>
                            </li>
                            <li className="section-overiew__item">
                                <h3 className="section-title-s">Quality</h3>
                                <p className="section-description-m">
                                    Whether you’re hiring a product designer, front-end developer, or graphic artist,
                                    Dribbble is home to the most sought-after creatives on earth.
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        
            <div className="section-inner">
                <div className="section-overview-client">
                    <div className="section-client__top">
                        <span className="section-client-title">We've helped sone of the world's best</span>
                        <span className="section-client-title">design-forward companies hire expert creatives.</span>

                        <div className="section-logo-client">
                            <LgStarbucks />
                            <Facebook />
                            <Amazon />
                            <Salesforce />
                            <Mailchimp />
                            <Vimeo />
                            <Ghost />
                            <WalmartLabs />
                            <Thoughtbot />
                            <Asana />
                        </div>

                    </div>
                    <div className="section-client__bot">
                        <div className="section-description bold">
                            “Dribbble’s candidate pool is superior to some of the best design recruiters in the world. 
                            From a designer’s perspective, this is the place to get exposure to some of the best high-quality 
                            companies looking to hire amazing talent.”
                        </div>

                        <div className="section-client-profile">
                            <img src={Client} alt="client"/>
                            <div>
                                <div className="client-profile-name">Jared Krause</div>
                                <GoodMoney />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview;