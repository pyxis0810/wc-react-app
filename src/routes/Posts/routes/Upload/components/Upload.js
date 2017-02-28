import React, { Component } from 'react';

import PostForm from 'components/PostForm';

class Upload extends Component {
  render() {

    return(
        <div>
            파일 업로드
            <PostForm />
        </div>
    );
  }
}

module.exports = Upload;