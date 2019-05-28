import React from 'react';

const CommentDetails = commentProps => {
console.log(commentProps)
 return(
    <div className="comment">
    <a href="/" className="avatar">
        <img alt="avatar" 
        src={commentProps.avatar} 
        />
    </a>
    <div className="content">
        <a href="/" className="author">
            {commentProps.author}
        </a>
        <div className="metadata">
            <span className="date">
                {commentProps.timeAgo}
            </span>
        </div>
        <div className="text">
            {commentProps.content}
        </div>
    </div>
     </div>
 )

}

export default CommentDetails;