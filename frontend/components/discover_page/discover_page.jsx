import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { playSongAC } from '';
import NavbarContainer from '../navbar/navbar_container';
import SidebarContainer from '../sidebar/sidebar_container';
// import SongItem from '../splash_page/song_item';

class DiscoverPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: null,
    };
  }

  componentDidMount() {
    // this.props.requestAllUsers();
    this.props.requestAllSongs();
  }

  render() {
    const { allSongs } = this.props;

    if (!allSongs.length) {
      return null;
    }

    return (
      <div className="content">
        <NavbarContainer />
        <div className="discover-content">
          <div className="index-wrapper">
            <ul>
              {allSongs.length &&
                allSongs.map(song => {
                  const { albumImgUrl, songTitle } = song;

                  return (
                    <Link to={`/dethklok/${songTitle}`}>
                      <li>
                        <img alt={songTitle} src={albumImgUrl} />
                        {songTitle}
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
          <SidebarContainer />
        </div>
      </div>
    );
  }
}

export default DiscoverPage;
