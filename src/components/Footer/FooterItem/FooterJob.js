import React from 'react';

import rabbit from '../../../assets/images/rabbit.png';
import lendivest from '../../../assets/images/lendivest.png';
import klanar from '../../../assets/images/klanar.png';

const FooterJob = props => {

    return (
        <div className="footer-item footer-item__job">
            <div className="footer-item__title">Jobs for Designers</div>
            <ul className="footer-job__items">
                <li className="footer-job__item d-flex">
                    <img src={rabbit} alt="rabbit"/>
                    <div>
                        <a href="#job">TaskRabbit</a>
                        <span>Senior Product Desinger</span>
                    </div>
                </li>
                <li className="footer-job__item d-flex">
                    <img src={lendivest} alt="lendivest"/>
                    <div>
                        <a href="#job">LendInvest</a>
                        <span>Head of Product Designer</span>
                    </div>
                </li>
                <li className="footer-job__item d-flex">
                    <img src={klanar} alt="klanar"/>
                    <div>
                        <a href="#job">Klanar</a>
                        <span>Brand Desginer / Art Director</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FooterJob;