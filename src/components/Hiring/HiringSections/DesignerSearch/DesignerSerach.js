import React from 'react';

import './DesignerSearch.css';
import DesingerHire1 from '../../../../assets/images/designer-for-hire-1.png';
import DesingerHire2 from '../../../../assets/images/designer-for-hire-2.png';
import DesingerShot1 from '../../../../assets/images/designer-shots-1.png';
import DesingerShot2 from '../../../../assets/images/designer-shots-2.png';
import DesingerShot3 from '../../../../assets/images/designer-shots-3.png';
import DesingerShot4 from '../../../../assets/images/designer-shots-4.png';
import DesingerShot5 from '../../../../assets/images/designer-shots-5.png';
import DesingerShot6 from '../../../../assets/images/designer-shots-6.png';
import BoxMessage from '../../../UI/SVG/BoxMessage';
import Find from '../../../UI/SVG/Find';
import Location from '../../../UI/SVG/Location';
import Start from '../../../UI/SVG/Start';
import Dollar from '../../../UI/SVG/Dollar';
import Tag from '../../../UI/SVG/Tag';

const DesginerSearch = props => {
    return (
        <section id="designer-search">
            <div className="section-inner section-inner-narrow-right">

                <div className="designer-search-layout">
                    <div className="width-40">
                        <div className="section-brand-title">DESIGNER SEARCH</div>
                        <h2 className="section-title-m">
                            Powerful designer search and filtering
                        </h2>

                        <p className="section-description">
                            Our premium hiring search tools gibe you the ability to search by specialty,
                            location, experience level, budget preferenecs, and more. Combine the power of self -sourcing
                            with our #1 job board and you'll be hiring in no time.
                        </p>

                        <div className="section-overiew-list">
                            <ul className="section-overiew__items">
                                <li className="section-overiew__item">
                                    <h3 className="section-title-s">Instantly find publicly available designers</h3>
                                    <p className="section-description-m">
                                        Connecting with designers is easy through our platform messaging system
                                    </p>
                                </li>
                                <li className="section-overiew__item">
                                    <h3 className="section-title-s">Advanced filters</h3>
                                    <p className="section-description-m">
                                        Ability to search by specialty, location, experience level, budget preferences, and more.
                                    </p>
                                </li>
                                <li className="section-overiew__item">
                                    <h3 className="section-title-s">Powerful designer search and filtering</h3>
                                    <p className="section-description-m">
                                        Source from designers who are currently looking for work.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="hiring-panel-design">
                        <div className="hiring-panel-design__background">
                            <div className="avatar-card">
                                <div className="card-top">
                                    <img src={DesingerHire1} alt="desginer-for-hire" />
                                    <div>
                                        <h3 className="section-title-s">Zack Davenport</h3>
                                        <div className="client-profile-name">New York City</div>
                                    </div>
                                    <a href="#Hire-me" className="btn btn-color-white btn-green btn-radius">
                                        <BoxMessage /> Hire Me
                                    </a>
                                </div>
                                <div className="card-shtos">
                                    <img src={DesingerShot1} alt="designer-shots" />
                                    <img src={DesingerShot2} alt="designer-shots" />
                                    <img src={DesingerShot3} alt="designer-shots" />
                                </div>
                            </div>
                            <div className="avatar-card">
                                <div className="card-top">
                                    <img src={DesingerHire2} alt="desginer-for-hire" />
                                    <div>
                                        <h3 className="section-title-s">Kirsten Ulve</h3>
                                        <div className="client-profile-name">New York City</div>
                                    </div>
                                    <a href="#Hire-me" className="btn btn-color-white btn-green btn-radius">
                                        <BoxMessage /> Hire Me
                                    </a>
                                </div>
                                <div className="card-shtos">
                                    <img src={DesingerShot4} alt="designer-shots" />
                                    <img src={DesingerShot5} alt="designer-shots" />
                                    <img src={DesingerShot6} alt="designer-shots" />
                                </div>
                                <div className="client-profile-description">Branding, Illistration, Game Design, Graphic Design</div>
                            </div>

                            <div className="avatar-card avatar-card-m d-flex align-items-center">
                                <span><Find /></span> Illustrator
                            </div>

                            <div className="hiring-detail-box">
                                <ul className="hiring-detail__items">
                                    <li className="hiring-detail__item">
                                        <Location /> New York City, NY
                                    </li>
                                    <li className="hiring-detail__item">
                                        <Start /> 9+ years experience
                                    </li>
                                    <li className="hiring-detail__item">
                                        <Dollar /> $80k - $120k
                                    </li>
                                    <li className="hiring-detail__item">
                                        <Tag /> <span>Branding, Graphic <br /> <span style={{display: "inline-block", marginTop: ".2rem"}}>Design, Animation</span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default DesginerSearch