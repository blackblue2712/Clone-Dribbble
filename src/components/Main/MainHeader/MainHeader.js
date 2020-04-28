import React from 'react';

import "./MainHeader.css";

const MainHeader = props => {
    return (
        <section id="main-header">
            <div className="section-main section-main-header">
                <div className="main-header-content">
                    <div className="section-intro">
                        <h1 className="section-title">
                            <span>Discover the world’s top designers & creatives</span>
                        </h1>

                        <p className="section-description bold">
                            Dribbble is the leading destination to find & showcase creative work 
                            and home to the world's best design professionals.
                        </p>

                        <a className="btn-section btn btn-primary btn-color-white btn-radius" href="#hiring">Sign up</a>
                    </div>
                    <div className="shots-art"></div>
                </div>
            </div>
        </section>
    )
}

export default MainHeader;