import './invitation.less';
import bouquet from '../../images/wc-section-bouquet.png';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { Col, Row } from 'antd';
import moment from 'moment';

class Greetings extends Component {
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

  renderFullName = (locale, groom, bride) => {
    if (locale === 'ko') {
      return (
        <div>
          <div className="name-ko">
            <span className="bold">{`${groom.parents}`}</span>의 {groom.title} <span className="bold">{groom.firstname[locale]}</span>
          </div>
          <div className="name-ko">
            <span className="bold">{`${bride.parents}`}</span>의 {bride.title} <span className="bold">{bride.firstname[locale]}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="name-en">
            {`${groom.firstname[locale]} ${groom.lastname[locale]}`}
          </div>
          <span className="handwrite">and</span>
          <div className="name-en">
            {`${bride.firstname[locale]} ${bride.lastname[locale]}`}
          </div>
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

    if (!info.address || !locale) { return null; }

    const { address, place, date, time, profiles, comment } = info;
    const { groom, bride } = profiles;

    return(
      <div className="container-invitation">
        <Row className="invitation">
          <Col className="title">
            <img src={bouquet} role="presentation" />
            <div>
              <FormattedMessage id="app.invitation.title"/>
            </div>
          </Col>
          <Col xs={{span:18, offset:3}} md={{span:14, offset:5}} lg={{span:10, offset:7}}>
            <Row>
              <Row className="comment">
                <Col>
                  {comment[locale]}
                </Col>
              </Row>
              <Row>
                <Col md={{span:20, offset:2}}>
                  {this.renderFullName(locale, groom, bride)}
                </Col>
              </Row>
              <Row className="date">
                <Col>
                  {`${this.renderDate(locale, date)} ${this.renderTime(locale, `${date} ${time}`)}`}
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

module.exports = connect(Greetings.store)(Greetings);
