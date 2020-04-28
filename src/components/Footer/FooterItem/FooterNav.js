import React from 'react';

const FooterNav = props => {
    return (
        <div className="footer-item footer-item-nav">
            <div className="flex-item">
                <div className="footer-item__title">Dribbble</div>
                <div className="footer-nav__list">

                    <ul className="footer-nav__items">
                        <li className="footer-nav__item">
                            <a href="#footer">About</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Help</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Contact</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Careers</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Teams</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Guildlines</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Privacy</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Playoffs</a>
                        </li>
                    </ul>

                    <ul className="footer-nav__items">
                        <li className="footer-nav__item">
                            <a href="#footer">Shop</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Testimonials</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Media Kit</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Advertise</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">API</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Apps</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#footer">Places</a>
                        </li>
                    </ul>
                </div>


            </div>

            <div className="flex-item">
                <div className="footer-item__title">Hiring at Dribbble</div>
                <ul className="footer-nav__items">
                    <li className="footer-nav__item">
                        <a href="#footer">Post a job</a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="#footer">Search desginers</a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="#footer">Add your team</a>
                    </li>
                </ul>

                <div className="footer-item__title">Directories</div>
                <ul className="footer-nav__items">
                    <li className="footer-nav__item">
                        <a href="#footer">Jobs</a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="#footer">Tags</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterNav;