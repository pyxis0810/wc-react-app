import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';

import { setComment } from 'actions/comments';

class Comments extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    setComment: PropTypes.func.isRequired
  }

  static store(state) {
    return {
      auth: state.auth,
      comments: state.comments
    };
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} className="form-control" />
          {touched && error && <div className="error">{error}</div>}
        </div>
      </div>
    );
  }

  handleFormSubmit = ({ username, content }) => {
    const { setComment } = this.props;

    setComment({ username, content });
  }

  render() {
    const { handleSubmit, comments } = this.props;

    if (!comments) { return null; }

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <fieldset className="form-group">
            <Field name="username" type="text" component={this.renderField} label="User" className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <Field name="content" type="text" component={this.renderField} label="Content" className="form-control" />
          </fieldset>
          <div>
              <button className="btn btn-default">작성하기</button>
          </div>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.username) {
    errors.username = <FormattedMessage id="error.username.required" />;
  }
  if (!values.content) {
    errors.content = <FormattedMessage id="error.content.required" />;
  }

  return errors;
};

module.exports = connect(Comments.store, { setComment })(reduxForm({
  form: 'comment',
  validate: validate
})(Comments));
