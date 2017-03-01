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

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
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

  handleClick = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return(
      <Slide isOpen={this.state.isOpen}>
        <ul>
          <Link to="#intro" className="menu-link" onClick={this.handleClick}><li className="menu-item">
            <FormattedMessage id="app.nav.intro" />
          </li></Link>
          <Link to="#greetings" className="menu-link" onClick={this.handleClick}><li className="menu-item">
            <FormattedMessage id="app.nav.greetings" />
          </li></Link>
          <Link to="#location" className="menu-link" onClick={this.handleClick}><li className="menu-item">
            <FormattedMessage id="app.nav.location" />
          </li></Link>
          <Link to="#gallery" className="menu-link" onClick={this.handleClick}><li className="menu-item">
            <FormattedMessage id="app.nav.gallery" />
          </li></Link>
          <Link to="#contact" className="menu-link" onClick={this.handleClick}><li className="menu-item">
            <FormattedMessage id="app.nav.contact" />
          </li></Link>
          <Locale/>
        </ul>
      </Slide>
    );
  }
}

module.exports = connect(Menu.store, {})(Menu);
