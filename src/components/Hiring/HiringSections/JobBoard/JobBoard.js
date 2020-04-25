import React from 'react';

import './JobBoard.css';
import Mailchimp from '../../../../assets/images/mailchimp-avatar.png';
import Dropbox from '../../../../assets/images/dropbox-avatar.png';
import Location from '../../../UI/SVG/Location';
import Job from '../../../UI/SVG/Job';

class JobBoard extends React.Component {

    render() {
        return (
            <section id="job-board">
                <div className="section-inner">
                    <div className="width-45">
                        <div className="section-brand-title">JOB BOARD</div>
                        <h2 className="section-title-m">
                            The largest job borad for designers
                        </h2>

                        <p className="section-description">
                            Post to the #1 job board for hiring designers
                            and creative professionals in full-time or freelance / contract roles.
                        </p>
                    </div>

                    <div className="hiring-panel">
                            <div className="avatar-card">
                                <div className="avatar-profile">
                                    <img src={Mailchimp} alt="Mailchimp" />
                                    <div>
                                        <h2 className="section-title-m">Product Designer</h2>
                                        <div className="client-profile-name">Mailchimp</div>
                                    </div>
                                </div>
                                <div className="redacted">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="avatar-card">
                                
                            </div>
                            <div className="avatar-card">
                                <div className="avatar-profile">
                                    <img src={Dropbox} alt="Dropbox" />
                                    <div>
                                        <h2 className="section-title-m">Design Researcher</h2>
                                        <div className="client-profile-name">Dropbox</div>
                                    </div>
                                </div>
                                <div className="redacted">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div>
                                    <span className="card-info"><Location /> New York</span>
                                    <span className="card-info"><Job /> Full-Time</span>
                                </div>
                            </div>

                        </div>

                    <div className="width-45">
                        <div className="section-overiew-list">
                            <ul className="section-overiew__items">
                                <li className="section-overiew__item">
                                    <h3 className="section-title-s">Trusted by the design community</h3>
                                    <p className="section-description-m">
                                        Over 60k companies have hired designers on Dribbble.
                                    </p>
                                </li>
                                <li className="section-overiew__item">
                                    <h3 className="section-title-s">Unlimited hiring</h3>
                                    <p className="section-description-m">
                                        Swap out listings in order to fill multiple positions as needed.
                                    </p>
                                </li>
                                <li className="section-overiew__item">
                                    <h3 className="section-title-s">Get in front of 70k+ designers every month</h3>
                                    <p className="section-description-m">
                                        Our listings receive an average of 1.1K targeted clicks per month.
                                    </p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default JobBoard;