import './contact.less';
import groomIcon from './wc-icon-groom.png';
import brideIcon from './wc-icon-bride.png';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const Kakao = window.Kakao;

import { Button, Col, Icon, Row, message } from 'antd';

class Contact extends Component {
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

  createTalkLink = () => {
    Kakao.Link.sendTalkLink({
      label: '기환 & 수경의 결혼식에 초대합니다.\n\n일시: 2017.03.25(토) 오후12:30\n장소: 헤리츠2층 아그니스홀',
      image: {
        src: 'http://www.20170325.com/wc-kakao-thumbnail.jpg',
        width: '700',
        height: '500'
      },
      webButton: {
        text: '기환 & 수경의 청첩장',
        url: 'http://www.20170325.com' // The URLs domain should be configured in app settings.
      },
      webLink: {
        text: '아래의 버튼이 열리지 않을 경우 여기를 탭하세요.',
        url: 'http://www.20170325.com/weddingcard.jpg'
      },
      fail: () => {
        message.error('모바일에서 이용해 주세요.');
      }
    });
  }

  render() {
    const { info, locale } = this.props;

    if (!info.address || !info.location) { return null; }

    const { profiles } = info;
    const { groom, bride } = profiles;

    return(
      <div className="container-contact">
        <Row className="contact">
          <Row>
            <Col className="container" xs={{span:22, offset:1}} md={{span:10, offset:1}}>
              <Row>
                <Col>
                  {this.renderName(locale, groom.firstname[locale], groom.lastname[locale])}
                </Col>
              </Row>
              <Row>
                <Col className="title">
                  THE GROOM
                  <div className="icon">
                    <img src={groomIcon} role="presentation" />
                  </div>
                </Col>
              </Row>
              <Row>
                <a href={`tel:${groom.phone}`}><Button><Icon type="mobile" /></Button></a>
                <a href={`mailto:${groom.email}`}><Button><Icon type="mail" /></Button></a>
              </Row>
            </Col>
            <Col className="container" xs={{span:22, offset:1}} md={{span:10, offset:2}}>
              <Row>
                <Col>
                  {this.renderName(locale, bride.firstname[locale], bride.lastname[locale])}
                </Col>
              </Row>
              <Row>
                <Col className="title">
                  THE BRIDE
                  <div className="icon">
                    <img src={brideIcon} role="presentation" />
                  </div>
                </Col>
              </Row>
              <Row>
                <a href={`tel:${bride.phone}`}><Button><Icon type="mobile" /></Button></a>
                <a href={`mailto:${bride.email}`}><Button><Icon type="mail" /></Button></a>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="share">
              <Button id="kakao-link-btn" className="kakao-btn" ref={ref => { this.kakao = ref }} onClick={this.createTalkLink}>
                <img src="http://www.20170325.com/kakaolink_btn_small.png" role="presentation"/>
                <FormattedMessage id="app.contact.kakao"/>
              </Button>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}

module.exports = connect(Contact.store)(Contact);
