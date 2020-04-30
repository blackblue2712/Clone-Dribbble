import React from 'react';
import LikeShot from '../../../UI/SVG/Shots/LikeShot';
import SaveShot from '../../../UI/SVG/Shots/SaveShot';
import CommentShot from '../../../UI/SVG/Shots/Comment';

const ShotItem = props => {
    let { image, badge, avatar, title, displayName, action: {like, comment} } = props.shotData;
    return (
        <li className="shots-grid__item">
            <div className="shots-wrapp">
                
                <div className="shots-top">
                    <a href="#show-shot" onClick={() => props.onOpenModalShot(props.shotData)}>
                        <div className="shots-content">
                            <img src={image} alt="shot-1"/>
                        </div>
                    </a>
                    <div className="shots-overlay">
                        <div className="shots-title">
                            {title}
                        </div>
                        <div className="shots-action">
                            <a href="#save-shot">
                                <SaveShot />
                            </a>
                            <a href="#like-shot">
                                <LikeShot />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="shots-bot">
                    <div className="shots-attribute-teams">
                        <a
                            href="#contact" className="shots-contact"
                            title={displayName}
                        >
                            <img src={avatar} alt={displayName}/>
                            <span>{displayName}</span>
                        </a>
                        <a href="#link" className={`shots-badge shots-badge-${badge}`}>
                            {badge}
                        </a>
                    </div>

                    <ul className="shots-tools">
                        <li className="tool fav">
                            <CommentShot /> 
                            <span>{comment}</span>
                        </li>
                        <li className="tool fav">
                            <LikeShot /> 
                            <span>{like}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default ShotItem;