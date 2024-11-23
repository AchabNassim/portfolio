import React, {useRef, useState, useEffect} from "react";
import './mediaComponent.css'

const MediaComponent = ({videoSource, poster}) => {
    // console.log(videoSource);
    return ( videoSource !== null ?
            <video className="mediaContainer hiddenVideo" muted controls preload="metadata" poster={poster} onLoadedData={(e) => console.log(e.target.classList.remove("hiddenVideo"))}>
                <source src={videoSource} type="video/mp4"  />
                Your browser does not support the video tag.
            </video> 
        :
            <img className="mediaContainer img" src={poster} alt="poster" />
    )
}

export default MediaComponent;