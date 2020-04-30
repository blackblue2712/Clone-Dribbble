import React from 'react';

const Shortcuts = props => {
    return (
        <div className="shot-key-shortcuts">
            <ul className="key-shortcuts__items">
                <li>keyboard shortcuts:</li>
                <li>
                    <strong>←</strong> previous shot
                </li>
                <li>
                    <strong>→</strong> next shot
                </li>
                <li>
                    <b>ESC</b> close
                </li>
                <li>
                    <b>L</b> or <b>F</b> like
                </li>
            </ul>
        </div>
    )
}

export default Shortcuts;