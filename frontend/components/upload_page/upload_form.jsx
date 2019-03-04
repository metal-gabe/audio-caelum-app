import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import classNames from 'classnames';

class UploadForm extends Component {
  render() {
    return (
      <div className="upload-form">
        <div className="uploader">
          <h1>Do you want to drag and drop your tracks?  <span>( not today 😉 )</span></h1>
          <button>instead, choose A FILE to upload</button>
        </div>
        <div className="rando-facts">
          Insert random fact generator here.
        </div>
      </div>
    );
  };
};

export default UploadForm;
