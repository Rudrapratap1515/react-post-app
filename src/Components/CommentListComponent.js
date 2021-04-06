import React from 'react';
import ReactTimeAgo from 'react-time-ago'

export default function Comment({ comment, user, deleteComment }) {
    return (
        <React.Fragment>
            {
                comment.comments.map((c) => {
                    return (
                        <div className="comment-list-item" key={c.id}>
                            <img src={user.image}></img>
                            <p><strong>{user.name}</strong> - {c.comment}<br/><br/><i><ReactTimeAgo date={c.timeAgo} locale="en-US" />
                            &nbsp;&nbsp; 
                            <a href="#" onClick={() => deleteComment(c.id)}>Delete</a></i></p>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}
