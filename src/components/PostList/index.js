import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getPosts } from 'actions/posts';

class PostList extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired
  }

  static store(state) {
    return {
      auth: state.auth,
      posts: state.posts
    };
  }

  componentDidMount() {
    const { getPosts } = this.props;

    getPosts();
  }

  renderPosts = () => {
    const { posts } = this.props;

    return posts.map((post) => {
      return (
        <div key={post.id}>
          {post.thumbnail ? <img className="card-img-top" src={`/uploads/${post.thumbnail}`} role="presentation" /> : null }
        </div>
      );
    });
  }

  render() {
    const { posts } = this.props;

    if (!posts) { return null; }

    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

module.exports = connect(PostList.store, { getPosts })(PostList);
