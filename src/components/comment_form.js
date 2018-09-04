/* @flow */

import React, { PropTypes } from 'react';

export default class CommentForm extends React.Component {
  // 中略
  render(): ReactElement {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange.bind(this)}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

CommentForm.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired
};