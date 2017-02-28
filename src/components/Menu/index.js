import './menu.less';

import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { stack as Slide } from 'react-burger-menu';

import Locale from 'components/Locale';

class Menu extends Component {
  static propTypes = {
    authenticated: PropTypes.bool,
    isOpen: PropTypes.bool
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
        <li className="menu-item">
          <Link to="/signout" className="menu-link"><FormattedMessage id="app.global.signout" /></Link>
        </li>
      );
    } else {
      return ([
        <Link to="/signin" className="menu-link" key={1}><li className="menu-item">
          <FormattedMessage id="app.global.signin" />
        </li></Link>,
        <Link to="/signup" className="menu-link" key={2}><li className="menu-item">
          <FormattedMessage id="app.global.signup" />
        </li></Link>
      ]);
    }
  }

  render() {
    return(
      <Slide>
        <ul>
          <a href="/#intro" className="menu-link"><li className="menu-item">
            <FormattedMessage id="app.nav.intro" />
          </li></a>
          <a href="/#greetings" className="menu-link"><li className="menu-item">
            <FormattedMessage id="app.nav.greetings" />
          </li></a>
          <a href="/#location" className="menu-link"><li className="menu-item">
            <FormattedMessage id="app.nav.location" />
          </li></a>
          <a href="/#gallery" className="menu-link"><li className="menu-item">
            <FormattedMessage id="app.nav.gallery" />
          </li></a>
          <a href="/#contact" className="menu-link"><li className="menu-item">
            <FormattedMessage id="app.nav.contact" />
          </li></a>
          <Locale/>
        </ul>
      </Slide>
    );
  }
}

module.exports = connect(Menu.store, {})(Menu);
