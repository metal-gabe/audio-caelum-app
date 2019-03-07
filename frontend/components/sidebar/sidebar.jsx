import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    const { allSongs } = this.props;
    console.log(allSongs);

    return (
      <section className="sidebar-content">
        <div className="related-tracks">

        </div>
      </section>
    );
  };
};

export default Sidebar;
