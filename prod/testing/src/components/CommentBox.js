import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' };
    
    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        //TODO - call action creator
        //And save the 
        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Add a comment</h1>
                <textarea onChange={this.handleChange} value={ this.state.comment } />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);