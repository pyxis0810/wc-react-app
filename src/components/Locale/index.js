import './locale.less';

import React, { Component, PropTypes } from 'react';
import { connect }  from 'react-redux';

import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import { setLocale } from 'actions/locale';

class Locale extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  }

  static store(state) {
    return {
      locale: state.locale
    };
  }

  onChange = (e) => {
    const { setLocale }  = this.props;

    setLocale(e.target.value);
  };

  render() {
    const { locale } = this.props;

    return(
      <div className="menu-locale">
        <RadioGroup onChange={this.onChange} defaultValue={locale}>
          <RadioButton value="ko">Korean</RadioButton>
          <RadioButton value="en">English</RadioButton>
        </RadioGroup>
      </div>
    );
  }
}

module.exports = connect(Locale.store, { setLocale })(Locale);
