import React from "react";
// import { Link, Redirect, Route } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";
import UploadNavbar from "./upload_navbar";
import UploadForm from "./upload_form";
import UploadFooter from "./upload_footer";

const UploadPage = props => {
  const { createSong, currentUser, errors, history } = props;

  return (
    <div className="content">
      <NavbarContainer />
      <div className="upload-content">
        <UploadNavbar />
        <UploadForm
          createSong={createSong}
          currentUser={currentUser}
          errors={errors}
          history={history}
        />
        <UploadFooter />
      </div>
    </div>
  );
};

export default UploadPage;
