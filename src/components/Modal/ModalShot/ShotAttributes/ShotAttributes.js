import React from 'react';

import LikeShot from '../../../UI/SVG/Shots/LikeShot';

const ShotAttributes = props => {
    return (
        <div className="shot-attributes">
            <a href="#user" className="attr-images">
                <img src={props.avatar} alt={props.name} />
            </a>
            <div className="attr-info">
                <div className="attr-info__title">
                    {props.title}
                </div>
                <div className="attr-info__by">
                    <p>
                        by <a href={`#${props.title}`}>{props.name}</a> | <a href="#follow">Follow</a>
                    </p>
                </div>
            </div>
            <div className="attr-actions">
                <a className="btn btn-gray btn-radius" href="#save">Save</a>
                <a className="btn btn-gray btn-radius" href="#save"><LikeShot /> Like</a>
            </div>
        </div>
    )
}

export default ShotAttributes;