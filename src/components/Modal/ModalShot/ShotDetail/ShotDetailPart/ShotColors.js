import React from 'react';

import Colors from '../../../../UI/SVG/Shots/Colors';

const ShotColors = props => {
    return (
        <div className="shot-colors">
            <Colors />
            <ul className="colors-list">
                <li><a style={{ backgroundColor: "#07010F" }} title="#07010F" href="#07010F">#07010F</a></li>
                <li><a style={{ backgroundColor: "#13125E" }} title="#13125E" href="#13125E">#13125E</a></li>
                <li><a style={{ backgroundColor: "#551F42" }} title="#551F42" href="#551F42">#551F42</a></li>
                <li><a style={{ backgroundColor: "#3132A0" }} title="#3132A0" href="#3132A0">#3132A0</a></li>
                <li><a style={{ backgroundColor: "#AE8085" }} title="#AE8085" href="#AE8085">#AE8085</a></li>
                <li><a style={{ backgroundColor: "#2FB0D3" }} title="#2FB0D3" href="#2FB0D3">#2FB0D3</a></li>
                <li><a style={{ backgroundColor: "#DED2CA" }} title="#DED2CA" href="#DED2CA">#DED2CA</a></li>
                <li><a style={{ backgroundColor: "#BA273E" }} title="#BA273E" href="#BA273E">#BA273E</a></li>
            </ul>
        </div>
    )
}

export default ShotColors;