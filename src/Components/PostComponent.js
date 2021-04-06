import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addComment, deleteComment, likePost } from '../Redux/ActionCreators';
import { FiHeart } from 'react-icons/fi'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { AiOutlinePlusCircle } from 'react-icons/ai'

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
            <h1>Hi</h1>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);