import "../container/Container.css"
import React, { useState } from 'react';
import video from "../../assets/img/video2.mp4"
const Container = () => {
    const [isVideoPlaying, setVideoPlaying] = useState(false);

    const handlePlay = () => {
        setVideoPlaying(true);
    };
    return (
        <div className="video-background" onCanPlay={handlePlay}>
            
            <video autoPlay muted loop playsInline className="video">
                <source src={video} autoPlay muted loop />
            </video>
        </div>
    )

}

export default Container