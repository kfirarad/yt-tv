import React from "react"
import ReactPlayer from 'react-player'


const Player = ({ video }) => 
{    
    return video[video.length-1] ? <ReactPlayer url={video[video.length-1].url} playing/> : ''
}

export default Player