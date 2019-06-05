import React from 'react';
import './VideoDetail.css';

const VideoDetail = (props) => {

        return (
            // <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
            <div 
            onClick={() => props.onVideoSelect(props.video)}
            className="item video-item">
                <img 
                className="ui image"
                src={props.video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="header">
                    {props.video.snippet.title }
                    </div>
                </div>
            </div>
        )
    
    
}
export default VideoDetail;