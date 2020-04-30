import React from 'react';

const ShotMoreRelated = props => {
    return (
        <div className="more-shots">
            <h3 className="meta-head">
                <a href="#more">More from {props.name}</a>
            </h3>
            <div className="more-thumbs">
                <a href="#more"><img alt="another city" src="https://cdn.dribbble.com/users/747805/screenshots/11147811/wander02_teaser.jpg" /></a>
                <a href="#more"><img alt="lonely city" src="https://cdn.dribbble.com/users/747805/screenshots/11123110/wander04_teaser.jpg" /></a>
                <a href="#more"><img alt="when times were simpler (part 2/2)" src="https://cdn.dribbble.com/users/747805/screenshots/11011494/laundry2_teaser.jpg" /></a>
                <a href="#more"><img alt="when times were simpler (part 1/2)" src="https://cdn.dribbble.com/users/747805/screenshots/11002980/laundry1_teaser.jpg" /></a>
            </div>
        </div>
    )
}

export default ShotMoreRelated;