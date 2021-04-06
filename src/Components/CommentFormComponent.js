import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        this.props.addComment(this.state.comment, this.props.postId, this.props.userId, Date.now());
        this.setState({
            comment: ""
        })
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.comment}
                        name="comment"
                        placeholder="say something .."
                        onChange={this.handleChange}
                        autoComplete="off">
                    </input>
                    <button type="submit">Post</button>
                </form>
            </div>
        )
    }
}
