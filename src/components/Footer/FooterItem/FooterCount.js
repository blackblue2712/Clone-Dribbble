import React from 'react';

import ball from '../../../assets/images/ball.png';

const FooterCount = props => {
    return (
        <div className="footer-item footer-item__count d-flex">
            <img height="40" src={ball} alt="dribbble"/>
            <div>
                <div className="count">11,138,689</div>
                <span>shots dribbbled</span>
            </div>
        </div>
    )
}

export default FooterCount;