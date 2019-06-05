import React from 'react';
import VideoDetail from './VideoDetail'
import './VideoList.css'

const VideoList = (props) => {
    const videos =  props.videos.map( video => {
        return (

        <VideoDetail 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} video={video} />

        )
    })

    return (
    <div className="ui relaxed divide list">
        {videos}
    </div>
    )
}
export default VideoList;