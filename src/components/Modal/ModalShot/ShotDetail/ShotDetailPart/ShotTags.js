import React from 'react';

import Tag from '../../../../UI/SVG/Tag';

const ShotTags = props => {
    return (
        <div className="shot-tags">
            <Tag />
            <ul className="tags-list">
                <li><a href="#tag" className="tag">buildings</a></li>
                <li><a href="#tag" className="tag">charater</a></li>
                <li><a href="#tag" className="tag">city</a></li>
                <li><a href="#tag" className="tag">concept art</a></li>
                <li><a href="#tag" className="tag">digital art</a></li>
                <li><a href="#tag" className="tag">girl</a></li>
                <li><a href="#tag" className="tag">illustration</a></li>
                <li><a href="#tag" className="tag">lights</a></li>
                <li><a href="#tag" className="tag">overlay</a></li>
                <li><a href="#tag" className="tag">overwatch</a></li>
                <li><a href="#tag" className="tag">procreate</a></li>
                <li><a href="#tag" className="tag">progress</a></li>
                <li><a href="#tag" className="tag">sketch</a></li>
                <li><a href="#tag" className="tag">style</a></li>
            </ul>
        </div>
    )
}

export default ShotTags;