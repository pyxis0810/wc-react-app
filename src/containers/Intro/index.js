import './intro.less';
import logo from './wc-save-the-date.png';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { Col, Row } from 'antd';
import moment from 'moment';

import { getInfo } from 'actions/info';

class Intro extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired
  }

  static store(state) {
    return {
      info: state.info,
      locale: state.locale
    };
  }

  componentWillMount() {
    const { getInfo } = this.props;

    getInfo();
  }

  renderName = (locale, firstname, lastname) => {
    if (locale === 'ko') {
      return (
        <div className="name-ko">
          {`${lastname}${firstname}`}
        </div>
      );
    } else {
      return (
        <div className="name-en">
          {`${firstname} ${lastname}`}
        </div>
      );
    }
  }

  renderDate = (locale, date) => {
    if (locale === 'ko') {
      return (
        moment(date).locale(locale).format('YYYY년 MMMM Do')
      );
    } else {
      return (
        moment(date).locale(locale).format('MMMM Do YYYY')
      );
    }
  }

  renderTime = (locale, time) => {
    if (locale === 'ko') {
      return (
        moment(time).locale(locale).format('a h:mm')
      );
    } else {
      return (
        moment(time).locale(locale).format('h:mm a')
      );
    }
  }

  render() {
    const { info, locale } = this.props;
    const { address, place, date, time, profiles } = info;

    if (!info.address || !locale) { return null; }

    const { groom, bride } = profiles;

    return(
      <div className="container-intro">
        <Row className="intro">
          <Col xs={{span:16, offset:4}} md={{span:14, offset:5}}>
            <img src={logo} style={{width:' 100%'}} alt="20170325" />
            <Row className="mention">
              <Row>
                <Col md={{span:20, offset:2}}>
                  {this.renderName(locale, groom.firstname[locale], groom.lastname[locale])}
                  <span className="handwrite">and</span>
                  {this.renderName(locale, bride.firstname[locale], bride.lastname[locale])}
                  <FormattedMessage id="app.intro.mention"/>
                </Col>
              </Row>
              <Row className="date">
                <Col>
                  {`${this.renderDate(locale, date)}`}<br/>{`${this.renderTime(locale, `${date} ${time}`)}`}
                </Col>
              </Row>
              <Row className="place">
                <Col>
                  {place[locale]}
                </Col>
              </Row>
              <Row className="address">
                <Col>
                  {address[locale]}
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

module.exports = connect(Intro.store, { getInfo })(Intro);
