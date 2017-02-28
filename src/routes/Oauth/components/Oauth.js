import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import store from 'store';

import { AUTH_USER } from 'actions';
import { getInfo } from 'actions/auth';

class Oauth extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    getInfo: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object
  }

  static store(state) {
    return {
      auth: state.auth
    };
  }

  getQuerystring = (param) => {
    const _tempUrl = window.location.search.substring(1);
    const _tempArray = _tempUrl.split('&');

    for(let i = 0; _tempArray.length; i++) {
      const _keyValuePair = _tempArray[i].split('=');
      if (_keyValuePair[0] === param) {
        return _keyValuePair[1];
      }
    }
  }

  componentWillMount() {
    const token = this.getQuerystring('token');
    const { getInfo } = this.props;

    if (token) {
      getInfo(token).then((response) => {
        localStorage.setItem('token', token);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('role', response.data.role);
        store.dispatch({ type: AUTH_USER });
        setTimeout(() => {
          this.context.router.push('/');
        }, 1000);
      })
    }

  }

  render() {
    return(
      <div>
        Successfully Authenticated.
      </div>
    )
  }
}

module.exports = connect(Oauth.store, { getInfo })(Oauth);
