import React from 'react';

const MediaInfo = ({title, date}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
        </div>
    );
};

export default MediaInfo;