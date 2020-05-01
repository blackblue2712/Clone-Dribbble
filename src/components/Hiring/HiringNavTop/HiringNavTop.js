import React from 'react';

import "./HiringNavTop.css";

class HiringNavTop extends React.Component {

    render() {
        return (
            <nav className="hiring-nav">
                <ul className="hiring-nav__items">
                    <li className="hiring-nav__item">
                        <a href="#overview">Overview</a>
                    </li>
                    <li className="hiring-nav__item">
                        <a href="#job-board">Job board</a>
                    </li>
                    <li className="hiring-nav__item">
                        <a href="#designer-search">Designer Search</a>
                    </li>
                    <li className="hiring-nav__item">
                        <a href="#curated-talent-pool">Curated Talent Pool</a>
                    </li>
                    <li className="hiring-nav__item">
                        <a href="#pricing">Pricing</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default HiringNavTop;