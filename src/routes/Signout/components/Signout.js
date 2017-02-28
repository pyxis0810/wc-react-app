import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { signOut } from 'actions/auth';

class SignOut extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount() {
    const { signOut } = this.props;

    signOut();
    setTimeout(() => {
      this.context.router.push('/');
    }, 1000);
  }
  render() {
    return (
      <div>Signed out.</div>
    );
  }
}

module.exports = connect(null, { signOut })(SignOut);
