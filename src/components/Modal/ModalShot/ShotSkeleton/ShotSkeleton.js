import React from 'react';

import './ShotSkeleton.css';

const ShotSkeleton = props => {
    return (
        <div className="shot-skeleton">
            <div className="modal-top">
                <div className="shot-attributes">
                    <div className="loading-attr-images"></div>
                    <div className="loading-attr-info">
                        <div className="loading-info-item fat"></div>
                        <div className="loading-info-item"></div>
                    </div>
                </div>
            </div>
            <div className="modal-body">
                <div className="loading-slide-shot"></div>

                <div className="shot-detail-layout">
                    <div className="shot-detail-left">
                        <div className="loading-100"></div>
                        <div className="loading-100"></div>
                        <div className="loading-75"></div>
                    </div>
                    <div className="shot-detail-right">
                        <div className="loading-100"></div>
                        <div className="loading-100"></div>
                        <div className="loading-75"></div>
                    </div>
                </div>
            </div>
            <div className="modal-bot">

            </div>
        </div>
    )
}

export default ShotSkeleton;