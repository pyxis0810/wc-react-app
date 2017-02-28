import './gallery.less';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { Button, Card, Col, Icon, Row } from 'antd';
import Lightbox from 'react-image-lightbox';
import { Parallax, Background } from 'react-parallax';

import { getPosts } from 'actions/posts';

class Gallery extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    locale: PropTypes.string.isRequired
  }

  static store(state) {
    return {
      posts: state.posts,
      locale: state.locale
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  componentWillMount() {
    const { getPosts } = this.props;

    getPosts();
  }

  handleOpen = (index) => {
    if (!index) { index = 0; }
    this.setState({ photoIndex: index, isOpen: true });
  }

  renderImages = () => {
    const { posts } = this.props;

    const post = posts[4];

    return (
      <Card bordered={false} bodyStyle={{ padding: 0 }}>
        <div className="card-image">
          <img src={`/uploads/${post.thumbnail}`} style={{width:'100%'}} role="presentation" onClick={() => this.handleOpen()} />
        </div>
        <div className="card-content" onClick={() => this.handleOpen()}>
          <Icon type="plus-circle-o" /> <FormattedMessage id="app.gallery.more"/>
        </div>
      </Card>
    );
  }

  renderLightbox = () => {
    const { posts } = this.props;
    const { photoIndex } = this.state;

    const images = posts.map((post) => {
      return (
        `/uploads/${post.thumbnail}`
      );
    })

    return (
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}

        onCloseRequest={() => this.setState({ isOpen: false })}
        onMovePrevRequest={() => this.setState({
          photoIndex: (photoIndex + images.length - 1) % images.length,
        })}
        onMoveNextRequest={() => this.setState({
          photoIndex: (photoIndex + 1) % images.length,
        })}
      />
    );
  }

  render() {
    const { posts } = this.props;
    const { isOpen } = this.state;

    if (posts.length === 0) {
      return null;
    }

    //src={`/uploads/${post.thumbnail}`}
    return(
      <div className="container-gallery">
        <Row className="gallery">
          <Col xs={{span:22, offset:1}} lg={{span:12, offset:6}}>
            {this.renderImages()}
          </Col>
        </Row>
        {isOpen && this.renderLightbox()}
      </div>
    );
  }
}

module.exports = connect(Gallery.store, { getPosts })(Gallery);