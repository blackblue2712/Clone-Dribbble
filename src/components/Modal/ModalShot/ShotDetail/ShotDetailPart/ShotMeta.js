import React from 'react';

import Pin from '../../../../UI/SVG/Socials/Pin';
import Tweet from '../../../../UI/SVG/Socials/Tweet';
import LinkSVG from '../../../../UI/SVG/Link';

const ShotMeta = props => {
    return (
        <div className="shot-meta mb-20">
            <div className="meta-btn">
                <a href="#pin" className="btn btn-radius btn-gray btn-sm">
                    <Pin /> Pin
                            </a>
                <a href="#tweet" className="btn btn-radius btn-gray btn-sm">
                    <Tweet /> Tweet
                            </a>
                <a href="#copy" className="btn btn-radius btn-gray btn-sm">
                    <LinkSVG /> Copy
                            </a>
            </div>
        </div>
    )
}

export default ShotMeta;