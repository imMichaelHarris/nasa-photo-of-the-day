import React from 'react';
import ReactPlayer from 'react-player';

const Media = (props) => {
    return (
        <div>
            <img src={props.media}/>
        </div>
    );
};

export default Media;