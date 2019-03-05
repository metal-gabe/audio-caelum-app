import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import classNames from 'classnames';

class UploadFooter extends Component {
  render() {
    return (
      <div className="upload-footer">
        <p>
          By uploading, you confirm that you're providing <em>good</em> music.
          If it's not, our music gnomes will take it down ASAP.
        </p>
        <small>You've been warned.</small>
        <div className="divider">
          <Link to="">Legal</Link> - <Link to="">Privacy</Link> - <Link to="">Cookies</Link> <br />
          Language: English (US)
        </div>
      </div>
    );
  };
};

export default UploadFooter;
