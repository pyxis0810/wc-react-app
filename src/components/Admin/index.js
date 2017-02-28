import React, { Component } from 'react';
import { connect } from 'react-redux';

module.exports = (ComposedComponent) => {
  class Admin extends Component {
    static store(state) {
      return {
        role: state.auth.role
      };
    }
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.role || this.props.role !== 'ADMIN') {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.role || nextProps.role !== 'ADMIN') {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return connect(Admin.store)(Admin);
}
