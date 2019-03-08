import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import SidebarContainer from '../sidebar/sidebar_container';

class DiscoverPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: null,
    };
  };

  componentDidMount() {
    this.props.requestAllSongs();
  };

  render() {
    const { allSongs } = this.props;
    const formattedSongs = allSongs.map((song) => {
      return (
        <Link to={`/dethklok/${song.songTitle}`}>
          <li>
            <img src={song.albumImgUrl} />
            {song.songTitle}
          </li>
        </Link>
      );
    });

    return (
      <div className="content">
        <NavbarContainer />
        <div className="discover-content">
          <div className="index-wrapper">
            <ul>{formattedSongs}</ul>
          </div>
          <SidebarContainer />
        </div>
      </div>
    );
  };
};

export default DiscoverPage;
