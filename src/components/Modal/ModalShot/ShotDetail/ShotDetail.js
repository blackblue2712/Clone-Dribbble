import React from 'react';

import ShotDescription from './ShotDetailPart/ShotDescription';
import ShotComments from './ShotDetailPart/ShotComments';
import ShotMeta from './ShotDetailPart/ShotMeta';
import ShotTags from './ShotDetailPart/ShotTags';
import ShotColors from './ShotDetailPart/ShotColors';
import ShotReact from './ShotDetailPart/ShotReact';
import ShotMoreRelated from './ShotDetailPart/ShotMoreRelated';

const ShotDetail = props => {
    return (
        <div className="shot-detail">
            <div className="shot-detail-layout">
                <div className="shot-detail-left">
                    <ShotDescription />
                    <ShotComments comments={props.action.comment} />
                    
                </div>
                <div className="shot-detail-right">
                    <ShotMeta />     
                    <div className="shot-stats mb-20">
                        <ShotTags />
                        <ShotColors />
                        <ShotReact like={props.action.like} />
                    </div>
                    <ShotMoreRelated name={props.name} />
                </div>
            </div>
        </div>
    )
}

export default ShotDetail;