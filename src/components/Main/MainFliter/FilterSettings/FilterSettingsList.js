import React from 'react';

import FilterDropdown from '../FilterDropdown/FilterDropdown';
import Find from '../../../UI/SVG/Find';
import ColorPicker from '../../../UI/SVG/ColorPicker';
import AdobeXD from '../../../UI/SVG/Apps/AdobeXD';
import AdobePS from '../../../UI/SVG/Apps/AdobePS';
import Figma from '../../../UI/SVG/Apps/Figma';
import Sketch from '../../../UI/SVG/Apps/Sketch';
import Unsplash from '../../../UI/SVG/Apps/Unsplash';
import AdobeIllustrator from '../../../UI/SVG/Apps/AdobeIllustrator';
import InvisionStudio from '../../../UI/SVG/Apps/InvisionStudio';


const filterTimeFrameList = ["Now", "This Past Week", "This Past Month", "All Time"];

const filterMadeWithList = ["All Apps", "AdobexD", "Figma", "Sketch", "Unsplash"];
const filterMadeWithImages = ["", <AdobeXD />, <Figma />, <Sketch />, <Unsplash />];

const filterDownloadList = [
    "All Shots", "Adobe Illustrator", "Adobe Photoshop", "Adobe XD", "Figma", "Invision Studio", "Sketch"
];
const filterDownloadImages = [
    "", <AdobeIllustrator />, <AdobePS />, <AdobeXD />, <Figma />, <InvisionStudio />, <Sketch />
];

const FilterSettingsList = props => {
    return (
        <div className="filter-settings__items" id="js-open-settings">
            <div className="filter-settings__item">
                <label htmlFor="tags">Tags</label>
                <div className="input-group">
                    <Find />
                    <input id="tags" type="text" />
                </div>
            </div>
            <div className="filter-settings__item">
                <label htmlFor="color">Color</label>
                <div className="input-group">
                    <ColorPicker />
                    <input id="color" type="text" placeholder="Enter hex or select color" />
                </div>
            </div>
            <div className="filter-settings__item">
                <label htmlFor="time-frame">Timeframe</label>
                <FilterDropdown filterList={filterTimeFrameList} />
            </div>
            <div className="filter-settings__item">
                <label htmlFor="made-with">Made With</label>
                <FilterDropdown filterList={filterMadeWithList} filterImages={filterMadeWithImages} />
            </div>
            <div className="filter-settings__item">
                <label htmlFor="downloads">Downloads</label>
                <FilterDropdown filterList={filterDownloadList} filterImages={filterDownloadImages} />
            </div>
        </div>
    )
}

export default FilterSettingsList;