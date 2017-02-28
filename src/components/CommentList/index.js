import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';

import { getComments } from 'actions/comments';

class CommentList extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    getComments: PropTypes.func.isRequired
  }

  static store(state) {
    return {
      auth: state.auth,
      comments: state.comments
    };
  }

  componentDidMount() {
    const { getComments } = this.props;

    getComments();
  }

  renderComments = () => {
    const { comments } = this.props;

    return comments.map((comment) => {
      return (
        <div key={comment.id}>
          {comment.id}
          {comment.username}
          {comment.content}
          <FormattedDate
            value={comment.created_at}
            day="numeric"
            month="long"
            year="numeric" />
        </div>
      );
    });
  }

  render() {
    const { comments } = this.props;

    if (!comments) { return null; }

    return (
      <div>
        {this.renderComments()}
      </div>
    );
  }
}

module.exports = connect(CommentList.store, { getComments })(CommentList);
