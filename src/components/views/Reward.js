import '../styles/Reward.css';
import React from 'react';

const ProgressBar = (props) => {
    return(
        <div className="progress-bar">
            <Filler />
        </div>
    )
}

const Filler = (pros) => {
    return <div className="filler" />
}

export default ProgressBar;