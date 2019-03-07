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

    console.log('All Songs in Render', allSongs);
    console.log('Props inside of render', this.props);

    const collectAllSongs = allSongs.map((song) => {
      return <Link to=""><li>{song.songTitle}</li></Link>
    });

    console.log('All Songs in LI', collectAllSongs);

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
