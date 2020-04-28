import React from 'react';

import Logo from '../../Header/Logo/Logo';
import './FooterItem.css';

import TeamDirbbble from '../../../assets/images/icon-team-dribbble.png';
import TeamFacebook from '../../../assets/images/icon-team-facebook.png';
import TeamTwitter from '../../../assets/images/icon-team-twitter.png';
import TeamInstagram from '../../../assets/images/icon-team-instagram.png';
import TeamBlog from '../../../assets/images/icon-team-blog.png';

const FooterAbout = props => {

    return (
        <div className="footer-item footer-item-about">
            <Logo />
            <div className="footer-item__title">Show and tell for designers</div>
            <div className="footer-item__description">
                What are you woking on? Dribbble is a community of designers sharing screenshots of their work, 
                process, and projects.
            </div>
            <div className="footer-about__socials">
                <a href="#social"><img src={TeamDirbbble} alt="team-dribbble"/></a>
                <a href="#social"><img src={TeamFacebook} alt="TeamFacebook"/></a>
                <a href="#social"><img src={TeamTwitter} alt="TeamTwitter"/></a>
                <a href="#social"><img src={TeamInstagram} alt="TeamInstagram"/></a>
                <a href="#social"><img src={TeamBlog} alt="TeamBlog"/></a>
            </div>
        </div>
    )
}

export default FooterAbout;