import React from 'react';

const ShotComments = props => {
    return (
        <div className="shot-comments">
            <h3>{props.comments} Responses</h3>
            <ul className="shot-comments__items">
                <li className="shot-comments__item">
                    <div className="comment-head">
                        <img alt="Maninder Kaur" src="https://cdn.dribbble.com/users/2366287/avatars/small/4c53ab484e201af26accb3e42eaded26.jpg?1529060607" />
                        <span className="display-name">Maninder Kaur</span>
                    </div>
                    <div className="comment-content">
                        <p>Amazing work :-)</p>
                    </div>
                    <div className="comment-bot">
                        <span>1 day ago</span> | <a href="#like">Like?</a>
                    </div>
                </li>
                <li className="shot-comments__item">
                    <div className="comment-head">
                        <img alt="Martin Anzaldo " src="https://cdn.dribbble.com/users/1199697/avatars/small/9dc36106e35661712fe14e22b3b9ddce.png?1498163430" />
                        <span className="display-name">Martin Anzaldo</span>
                    </div>
                    <div className="comment-content">
                        <p>love the vibe!!!! and the palette</p>
                    </div>
                    <div className="comment-bot">
                        <span>1 day ago</span> | <a href="#like">Like?</a>
                    </div>
                </li>
                <li className="shot-comments__item">
                    <div className="comment-head">
                        <img alt="Burnwe Commercial" src="https://cdn.dribbble.com/users/2403711/avatars/small/e4fbcf4558f93c5e9039368ba798e7d4.png?1583156853" />
                        <span className="display-name">Burnwe Commercial</span>
                    </div>
                    <div className="comment-content">
                        <p>Cyberpunk is always good idea</p>
                    </div>
                    <div className="comment-bot">
                        <span>21 hours ago</span> | <a href="#like">Like?</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ShotComments;