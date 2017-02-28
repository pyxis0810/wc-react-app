import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getInfo } from 'actions/info';
import { FormattedMessage } from 'react-intl';

class Calendar extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired
  }

  static store(state) {
    return {
      date: state.info.date
    };
  }

  componentWillMount() {
    const { getInfo } = this.props;

    getInfo();
  }

  componentDidUpdate() {
    this.initMaps();
  }

  render() {
    const { info } = this.props;

    if(!info.location) { return null; }

    return(
      <div style={{ width: '100%', height: '40vh' }} id="map" ref={(ref) => { this.map = ref }}></div>
    );
  }
}

module.exports = connect(Calendar.store, { getInfo })(Calendar);
