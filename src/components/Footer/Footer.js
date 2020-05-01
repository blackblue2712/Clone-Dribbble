import React from 'react';

import classes from './Footer.module.css';
import FooterItemAbout from './FooterItem/FooterAbout';
import FooterItemNav from './FooterItem/FooterNav';
import FooterItemJob from './FooterItem/FooterJob';
import FooterItemCount from './FooterItem/FooterCount';

import ScrollToTop from './ScollToTop';

const Footer = props => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.FooterItems}>
                <FooterItemAbout />
                <FooterItemNav />
                <FooterItemJob />
                <FooterItemCount />
            </div>
            <div className={classes.FooterEnd}>
                <div>
                    <span role="img" aria-label="emoji">Made with 💻 ♥ 🚬 remotely from VietNam </span>
                     © 2020
                </div>
            </div>

            <ScrollToTop />
        </footer>
    )
}

export default Footer;