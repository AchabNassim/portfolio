import React, { useState } from "react";
import './videoComponent.css'

const VideoComponent = ({videoSource, poster}) => {

    return (
        <video className="projectVideo" muted controls >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default VideoComponent;