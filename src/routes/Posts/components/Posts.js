import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PostList from 'components/PostList';

class Posts extends Component {
  static propTypes = {
    children: PropTypes.object,
    auth: PropTypes.object.isRequired
  }

  static store(state) {
    return {
      auth: state.auth,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      authenticated: this.props.auth.authenticated,
      role: this.props.auth.role
    }
  }

  componentWillMount() {

  }

  handleClick = () => {
    this.props.router.push('/posts/upload');
  }

  render() {
    const { role } = this.state;
    const { children } = this.props;

    return(
      <div>
        <div>
          {role === 'ADMIN' ? <button onClick={this.handleClick}>업로드</button> : null }
        </div>
        {children || <PostList />}
      </div>
    );
  }
}

module.exports = connect(Posts.store, { })(Posts);
