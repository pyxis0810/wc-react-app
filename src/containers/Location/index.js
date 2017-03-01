import './location.less';
import bouquet from '../../images/wc-section-bouquet.png';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const Kakao = window.Kakao;

import { Button, Col, Row, Tag } from 'antd';

import Map from 'components/Map';

class Location extends Component {
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

  navi = (x, y, place) => {
    Kakao.Navi.start({
      name: place,
      x: x,
      y: y,
      coordType: 'wgs84'
    });
  }

  render() {
    const { info, locale } = this.props;

    if (!info.address || !info.location) { return null; }

    const { address, location, place, transportation } = info;

    return(
      <div className="container-location">
        <Row className="location">
          <Row>
            <Col className="title">
              <img src={bouquet} role="presentation" />
              <div>
                <FormattedMessage id="app.location.title"/>
              </div>
            </Col>
          </Row>
          <Row className="map">
            <Col>
              <Map address={address[locale]} location={location} />
            </Col>
          </Row>
          <Row>
            <Col xs={{span:22, offset:1}} md={{span:14, offset:5}} lg={{span:10, offset:7}}>
              <Row className="bus">
                <Col><Tag className="title">BUS</Tag>{`${transportation.bus}`}</Col>
              </Row>
              <Row className="subway">
                <Col><Tag className="title">SUBWAY</Tag>{transportation.subway[locale]}</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => this.navi(location.lng, location.lat, place[locale])} className="navi-btn">
                <img src="http://www.20170325.com/kakaonavi_btn_small.png" role="presentation"/>
                <FormattedMessage id="app.location.navi"/>
              </Button>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}

module.exports = connect(Location.store)(Location);