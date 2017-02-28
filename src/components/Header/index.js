import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Locale from 'components/Locale';

class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool
  }

  static store(state) {
    return {
      authenticated: state.auth.authenticated
    };
  }

  renderLinks = () => {
    const { authenticated } = this.props;

    if(authenticated) {
      return (
        <li className="nav-item">
          <Link to="/signout" className="nav-link"><FormattedMessage id="app.global.signout" /></Link>
        </li>
      );
    } else {
      return ([
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link"><FormattedMessage id="app.global.signin" /></Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link"><FormattedMessage id="app.global.signup" /></Link>
        </li>
      ]);
    }
  }

  render() {
    return(
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link"><FormattedMessage id="app.nav.home" /></Link>
            </li>
            <li className="nav-item">
              <Link to="/intro" className="nav-link"><FormattedMessage id="app.nav.greeting" /></Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link"><FormattedMessage id="app.nav.gallery" /></Link>
            </li>
            <li className="nav-item">
              <Link to="/comments" className="nav-link"><FormattedMessage id="app.nav.guest" /></Link>
            </li>
            {this.renderLinks()}
            <Locale />
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = connect(Header.store, {})(Header);
