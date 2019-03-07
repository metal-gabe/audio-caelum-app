import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

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
    const collectAllSongs = allSongs.map((song) => {
      return <Link to=""><li>{song.songTitle}</li></Link>
    });

    return (
      <div className="content">
        <NavbarContainer />
        <div className="discover-content">
          <ul>{collectAllSongs}</ul>
        </div>
      </div>
    );
  };
};

export default DiscoverPage;
