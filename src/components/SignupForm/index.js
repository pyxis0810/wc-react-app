import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';

import { signUp, unmountAuth } from 'actions/auth';

class SignupForm extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    signUp: PropTypes.func.isRequired,
    unmountAuth: PropTypes.func.isRequired
  }

  static store(state) {
    return {
      errorMessage: state.auth.error
    };
  }

  componentWillUnmount() {
    const { unmountAuth } = this.props;

    unmountAuth();
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div>
        <div>
          <input {...input} placeholder={label} type={type} className="form-control" />
          {touched && error && <div className="error">{error}</div>}
        </div>
      </div>
    );
  }

  handleFormSubmit = (values) => {
    const { signUp } = this.props;

    signUp(values);
  }

  renderAlert = () => {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong><FormattedMessage id="error" /></strong>
          <FormattedMessage id={errorMessage} />
        </div>
      );
    }
    return null;
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label><FormattedMessage id="app.global.email" /></label>
          <Field name="email" type="email" component={this.renderField} label="Email" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label><FormattedMessage id="app.global.password" /></label>
          <Field name="password" type="password" component={this.renderField} label="Password" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label><FormattedMessage id="app.global.password.confirm" /></label>
          <Field name="passwordConfirm" type="password" component={this.renderField} label="Password Confirm" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary"><FormattedMessage id="app.global.signup" /></button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {}
  if (values.password !== values.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  if (!values.email) {
    errors.email = <FormattedMessage id="error.email.required" />;
  }
  if (!values.password) {
    errors.password = <FormattedMessage id="error.password.required" />;
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = <FormattedMessage id="error.password.required" />;
  }
  return errors;
};

module.exports = connect(SignupForm.store, { signUp, unmountAuth })(reduxForm({
  form: 'signup',
  validate: validate
})(SignupForm));
