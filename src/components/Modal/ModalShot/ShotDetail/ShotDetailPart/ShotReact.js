import React from 'react';

import SaveShot from '../../../../UI/SVG/Shots/SaveShot';
import Date from '../../../../UI/SVG/Shots/Date';
import LikeShot from '../../../../UI/SVG/Shots/LikeShot';

const ShotReact = props => {
    return (
        <>
            <div className="shot-likes">
                <LikeShot />
                <span>{props.like} likes</span>
            </div>
            <div className="shot-saves">
                <SaveShot />
                <span>3 saves</span>
            </div>
            <div className="shot-date">
                <Date />
                <span>Apr 27, 2020</span>
            </div>
        </>
    )
}

export default ShotReact;