import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Intro extends Component {
  render() {
    return(
      <div>
        <FormattedMessage id="app.message.greeting" />
      </div>
    );
  }
}

module.exports = Intro;
