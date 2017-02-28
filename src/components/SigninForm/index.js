import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { signIn, googleAuth, facebookAuth, unmountAuth } from 'actions/auth';

class SigninForm extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    signIn: PropTypes.func.isRequired,
    googleAuth: PropTypes.func.isRequired,
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

  handleFormSubmit = ({ email, password }) => {
    const { signIn } = this.props;

    signIn({ email, password });
  }

  handleGoogleAuth = () => {
    const { googleAuth } = this.props;

    googleAuth();
  }

  handleFacebookAuth = () => {
    const { facebookAuth } = this.props;

    facebookAuth();
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

    return(
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <fieldset className="form-group">
            <label><FormattedMessage id="app.global.email" /></label>
            <Field name="email" type="email" component={this.renderField} label="Email" className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label><FormattedMessage id="app.global.password" /></label>
            <Field name="password" type="password" component={this.renderField} label="Password" className="form-control" />
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary"><FormattedMessage id="app.global.signin" /></button>
        </form>
        <button onClick={this.handleGoogleAuth}>Google ID로 로그인</button>
        <button onClick={this.handleFacebookAuth}>Facebook ID로 로그인</button>
      </div>
    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = <FormattedMessage id="error.email.required" />;
  }
  if (!values.password) {
    errors.password = <FormattedMessage id="error.password.required" />;
  }

  return errors;
};

module.exports = connect(SigninForm.store, { signIn, googleAuth, facebookAuth, unmountAuth })(reduxForm({
  form: 'signin',
  validate: validate
})(SigninForm));
