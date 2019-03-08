import React, { Component } from 'react';
import { playSongAC } from '../../actions/song_actions';
import NavbarContainer from '../navbar/navbar_container';
import SongPageHeader from './song_page_header';
import CommentsFormContainer from '../comments_form/comments_form_container';
import SidebarContainer from '../sidebar/sidebar_container';

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

    const { songFromState } = this.props;
    if (!songFromState) return (null);

    // Setup the currentArtist to actually pull a user from the database
    return (
      <div className="content">
        <NavbarContainer />
        <div className="song-page-content">
          <SongPageHeader
            artist={this.props.currentArtist}
            songTitle={this.props.songTitle}
            song={songFromState}
          />
          <div className="about-song-wrapper">
            <section className="about-song">
              <CommentsFormContainer />
              <div className="song-info-wrapper">
                <div className="hero-bar">
                  <img src={songFromState.albumImgUrl} />
                  <p>{this.props.currentArtist}</p>
                </div>
                <div className="song-info">
                  <div className="song-description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, luctus praesent quis nulla imperdiet habitant quam fames, porta dapibus est justo integer viverra aenean. Scelerisque vivamus dictumst duis aenean id a curae, commodo luctus congue pharetra praesent facilisi dictum sed, mattis ligula tristique faucibus justo libero.
                  </div>
                  <div className="comments-feed"></div>
                  {/* <div className="comments-footer"></div> */}
                </div>
              </div>
            </section>
            <SidebarContainer />
          </div>
        </div>
      </div>
    );
  };
};

export default SongPage;
// <div>
//   <p>{this.props.currentArtist}</p>
//   <p>{songFromState.songTitle}</p>
// </div>
