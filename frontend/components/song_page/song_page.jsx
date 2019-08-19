import React, { Component } from 'react';
// import { playSongAC } from '../../actions/song_actions';
import NavbarContainer from '../navbar/navbar_container';
import SongPageHeader from './song_page_header';
import CommentsFormContainer from '../comments_form/comments_form_container';
import SidebarContainer from '../sidebar/sidebar_container';

class SongPage extends Component {
  componentDidMount() {
    const { requestSong, songTitle } = this.props;
    requestSong(songTitle);
  }

  // Not doing this creates an infinite loop
  // Because React is constantly seeing the state/props as
  // having changed, so it re-renders, then updates itself again
  componentDidUpdate(prevProps) {
    const { requestSong, songTitle } = this.props;

    if (prevProps.songTitle !== songTitle) {
      requestSong(songTitle);
    }
  }

  render() {
    // const { errors } = this.props;

    // const renderErrors = errors ? (
    //   <div className="errors">You have an error</div>
    // ) : null;

    const { currentArtist, playSong, songFromState, songTitle } = this.props;
    if (!songFromState) return null;

    // Setup the currentArtist to actually pull a user from the database
    return (
      <div className="content">
        <NavbarContainer />
        <div className="song-page-content">
          <SongPageHeader
            artist={currentArtist}
            playSong={playSong}
            song={songFromState}
            songTitle={songTitle}
          />
          <div className="about-song-wrapper">
            <section className="about-song">
              <CommentsFormContainer />
              <div className="song-info-wrapper">
                <div className="hero-bar">
                  <img alt="Your Fave Band!" src={songFromState.albumImgUrl} />
                  <p>{currentArtist}</p>
                </div>
                <div className="song-info">
                  <div className="song-description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    torquent, luctus praesent quis nulla imperdiet habitant quam
                    fames, porta dapibus est justo integer viverra aenean.
                    Scelerisque vivamus dictumst duis aenean id a curae, commodo
                    luctus congue pharetra praesent facilisi dictum sed, mattis
                    ligula tristique faucibus justo libero.
                  </div>
                  <div className="comments-feed" />
                  {/* <div className="comments-footer">m</div> */}
                </div>
              </div>
            </section>
            <SidebarContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default SongPage;
// <div>
//   <p>{this.props.currentArtist}</p>
//   <p>{songFromState.songTitle}</p>
// </div>
