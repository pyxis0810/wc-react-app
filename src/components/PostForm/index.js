import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';

import { setPost } from 'actions/posts';

class PostForm extends Component {
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

  handleFormSubmit = (data) => {
    let form = new FormData();
    form.append('title', data.title);
    form.append('thumbnail', data.thumbnail[0]);
    form.append('content', data.content);
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };

    const { setPost } = this.props;

    setPost(form, config);
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit)} method="post" encType="multipart/form-data">
        <fieldset className="form-group">
          <Field name="title" type="text" component={this.renderField} label="Title" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <Field name="content" type="text" component={this.renderField} label="Content" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <Field name="thumbnail" type="file" component="input" className="form-control" />
        </fieldset>
        <div>
          <button className="btn btn-default">작성하기</button>
        </div>
      </form>
    );
  }

}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = <FormattedMessage id="error.title.required" />;
  }
  if (!values.content) {
    errors.content = <FormattedMessage id="error.content.required" />;
  }

  return errors;
};

module.exports = connect(null, { setPost })(reduxForm({
  form: 'upload',
  validate: validate
})(PostForm));