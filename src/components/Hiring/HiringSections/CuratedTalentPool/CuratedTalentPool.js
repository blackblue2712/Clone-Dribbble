import React from 'react';

import './CuratedTalentPool.css';
import CardButtonClose from '../../../UI/SVG/CardButtonClose';
import CardButtonCheck from '../../../UI/SVG/CardButtonCheck';
import Vsble from '../../../UI/SVG/Vsble';
import Candidates1 from '../../../../assets/images/hire-candidates-1.png';
import Candidates2 from '../../../../assets/images/hire-candidates-2.png';
import Candidates3 from '../../../../assets/images/hire-candidates-3.png';
import BlockquoteImage from '../../../../assets/images/blockquote.png';

const CuratedTalentPool = props => {
    return (
        <section id="curated-talent-pool">
            <div className="section-inner section-inner-narrow-right background-pink">
                <div className="talent-layout">
                    <div className="width-40">
                        <div className="section-brand-title primary">CURATED TALENT POOL</div>
                        <h2 className="section-title-m">
                            Exclusive ready to interview candidates
                        </h2>

                        <p className="section-description">
                            Work with Dribbble’s creative staffing team to hire premium candidates from our exclusive network.
                            Our team hand picks the best matches for you and helps manage the interview process all the way through.
                        </p>

                        <div className="section-overiew-list">
                            <ul className="section-overiew__items">
                                <li className="section-overiew__item">
                                    <h3 className="section-title-s">Premium network of candidates</h3>
                                    <p className="section-description-m">
                                        New matches every week. Browse our full network at any time.
                                    </p>
                                </li>
                                <li className="section-overiew__item">
                                    <h3 className="section-title-s">Your partner in hiring</h3>
                                    <p className="section-description-m">
                                        Our talent team works closely with you throughout each hiring process.
                                    </p>
                                </li>
                                <li className="section-overiew__item">
                                    <h3 className="section-title-s">Lower cost than external recruitment</h3>
                                    <p className="section-description-m">
                                        No more 20% contingent fees, our innovative pricing is designed to save you money over traditional recruitment fees.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="talent-panel-design">
                        <div className="avatar-card">
                            <div className="card-top">
                                <img src={Candidates1} alt="hire-cadidates" />
                                <div>
                                    <h3 className="section-title-s">Issac LeFever</h3>
                                    <div className="client-profile-extra">---</div>
                                </div>
                                <a href="#Hire-me">
                                    $100k - $120k
                                </a>
                            </div>

                            <div className="card-bot">
                                <div className="card-button-1 btn">
                                    High demand
                                </div>
                                <div className="card-button-2 btn btn-radius">
                                    <CardButtonClose />
                                </div>
                                <div className="card-button-3 btn btn-radius">
                                    <CardButtonCheck />
                                </div>
                            </div>
                        </div>
                        <div className="avatar-card">
                            <div className="card-top">
                                <img src={Candidates2} alt="hire-cadidates" />
                                <div>
                                    <h3 className="section-title-s">Ashley Trommler</h3>
                                    <div className="client-profile-extra">---</div>
                                </div>
                                <a href="#Hire-me">
                                    $110k - $140k
                                </a>
                            </div>

                            <div className="card-bot">
                                <div className="card-button-1 btn">
                                    High demand
                                </div>
                                <div className="card-button-2 btn btn-radius">
                                    <CardButtonClose />
                                </div>
                                <div className="card-button-3 btn btn-radius">
                                    <CardButtonCheck />
                                </div>
                            </div>
                        </div>
                        <div className="avatar-card">
                            <div className="card-top">
                                <img src={Candidates3} alt="hire-cadidates" />
                                <div>
                                    <h3 className="section-title-s">Gregory Hartman</h3>
                                    <div className="client-profile-extra">---</div>
                                </div>
                                <a href="#Hire-me">
                                    $90k - $110k
                                </a>
                            </div>

                            <div className="card-bot">
                                <div className="card-button-1 btn">
                                    High demand
                                </div>
                                <div className="card-button-2 btn btn-radius">
                                    <CardButtonClose />
                                </div>
                                <div className="card-button-3 btn btn-radius">
                                    <CardButtonCheck />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section-inner section-inner-narrow-right no-reponsive">
                <div className="shared-quote">
                    <div className="image-quote">
                        <img src={BlockquoteImage} alt="blockquote"/>
                    </div>
                    <div className="section-quote-content">
                        <blockquote>
                            <h2>
                                “I feel more inclined to believe that a company values design if they’re coming to Dribbble 
                                to source designers instead of relying on more generic job boards.”
                            </h2>
                            <p>
                                <span>Alyssa Graves</span>, Visual Designer
                            </p>
                            <Vsble />
                        </blockquote>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CuratedTalentPool;
