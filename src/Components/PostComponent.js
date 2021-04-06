import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addComment, deleteComment, likePost } from '../redux/ActionCreators';
import { FiHeart } from 'react-icons/fi'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { AiOutlinePlusCircle } from '../redux/reducer/node_modules/react-icons/ai'

const mapStateToProps = state => {
    return {
        posts: state.posts,
        users: state.users,
        comments: state.comments
    }
};

const mapDispatchToProps = dispatch => ({
    addComment: (comment, postId, userId, timeAgo) => dispatch(addComment(comment, postId, userId, timeAgo)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    likePost: (postId, userId) => dispatch(likePost(postId, userId))
});

class Post extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        var objDiv = document.getElementsByClassName("comment-list")[0];
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render(){
        return(
            <div>
                {this.props.posts.map((post) => {
                    var user = this.props.users.filter((u) => {
                        return u.id == post.userId
                    })
                    return (
                        <div className="post-outer-div" key={post.id}>
                            <div className="post-div">
                                <div className="image-section">
                                    <img src={post.postImage}></img>
                                </div>
                                <div className="description-comment-section">
                                    <div className="descrpition-section">
                                        <img src={user[0].image}></img>
                                        <p><strong>{user[0].name}</strong> - {post.description}<br /><br /><i>{post.time}</i></p>
                                    </div>
                                    <div className="plus-icon-div">
                                        <AiOutlinePlusCircle className="icon-plus" />
                                    </div>
                                    <div className="comment-section">
                                        <div className="comment-list">
                                            <Comment comment={this.props.comments} user={user[0]} deleteComment={this.props.deleteComment} />
                                        </div>
                                        <div className="post-likes">
                                            <div className="post-likes-inner">
                                                <FiHeart className="icon-heart" onClick={() => this.props.likePost(post.id, user[0].id)} /> &nbsp;  <IoChatbubbleOutline className="icon-comment" />
                                                <h4>{post.likes} Likes | {this.props.comments.comments.length} Comments</h4>
                                                <p>8h ago</p>
                                            </div>
                                        </div>
                                        <div className="post-comment">
                                            <Form addComment={this.props.addComment} userId={user[0].id} postId={post.id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);