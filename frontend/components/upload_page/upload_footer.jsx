import React from 'react';
// import { Link, Redirect, Route } from "react-router-dom";
// import classNames from "classnames";

const UploadFooter = props => {
  return (
    <div className="upload-footer">
      <p>
        By uploading, you confirm that you&lsquo;re providing <em>good</em>{' '}
        music. If it&lsquo;s not, our music gnomes will take it down ASAP.
      </p>
      <small>You&lsquo;ve been warned.</small>
      <div className="divider">
        <a href="http://google.com/">Legal</a> -{' '}
        <a href="http://google.com/">Privacy</a> -{' '}
        <a href="http://google.com/">Cookies</a>
        <p>Language: English (US)</p>
      </div>
    </div>
  );
};

export default UploadFooter;
