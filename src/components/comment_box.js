/* @flow */

import React from 'react';
import CommentForm from './comment_form';
import CommentList from './comment_list';
import type { Comment } from '../types';

let count: number = 0;

type State = {
  comments: Array<Comment>;
};

export default class CommentBox extends React.Component<{}, {}, State> {
  // 中略 

  render(): ReactElement {
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
};