import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  componentDidMount() {
    this.props.requestAllSongs();
  };

  render() {
    const { allSongs } = this.props;
    console.log(allSongs);

    const songA = allSongs[0];
    // const songB = allSongs[1];
    // const songC = allSongs[2];

    // debugger

    return (
      <section className="sidebar-content">
        <div className="related-tracks">
          <div className="related-tracks-header">
            <div>Related tracks</div>
            <span><Link to="/discover">View all</Link></span>
          </div>
          <div className="related-tracks">
            <div className="related-track">
              <img src={songA.albumImgUrl} />
              <div className="related-track-info">
                <div>AnneX</div>
                <div>
                  <Link to="/etc/savage%20blood">Savage Blood</Link>
                </div>
              </div>
            </div>
            <div className="related-track">
              <img src={songA.albumImgUrl} />
              <div className="related-track-info">
                <div>AnneX</div>
                <div>
                  <Link to="/etc/un-named">Un-Named</Link>
                </div>
              </div>
            </div>
            <div className="related-track">
              <img src={songA.albumImgUrl} />
              <div className="related-track-info">
                <div>AnneX</div>
                <div>
                  <Link to="/etc/by%20my%20side">By My Side</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

export default Sidebar;
