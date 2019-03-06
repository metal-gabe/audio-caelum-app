import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import NavbarContainer from '../navbar/navbar_container';
import SongPageHeader from './song_page_header';
// import CommentsFormContainer from '../comments_form/comments_form_container';
// import SidebarContainer from '../sidebar/sidebar_container';

class SongPage extends Component {
  componentDidMount() {
    this.props.requestSong(this.props.songTitle);
  };

  // Not doing this creates an infinite loop
    // Because React is constantly seeing the state/props as
    // having changed, so it re-renders, then updates itself again
  componentDidUpdate(prevProps) {
    if (prevProps.songTitle !== this.props.songTitle) {
      this.props.requestSong(this.props.songTitle);
    }
  };

  render() {
    const renderErrors = this.props.errors ?
      <div className="errors">You have an error</div> : null

    // debugger
    const { songFromState } = this.props;
    if (!songFromState) {
      return (null);
    }

    return (
      <div className="content">
        <NavbarContainer />
        <div className="song-page-content">
          <SongPageHeader />
          {/* <CommentsFormContainer /> */}
          <div>
            <p>{this.props.currentUser.username}</p>
            <p>{songFromState.songTitle}</p>
            <p>
              <ReactPlayer
                url={songFromState.songUrl}
                width="100%"
                height="3em"
              />
            </p>
          </div>
          {/* {renderErrors} */}
        </div>
      </div>
    );
  };
};

export default SongPage;
