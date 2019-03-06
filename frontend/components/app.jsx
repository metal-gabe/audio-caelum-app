import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PlayerContainer from './player/player_container';
import SplashPageContainer from './splash_page/splash_page_container';
import DiscoverPageContainer from './discover_page/discover_page_container';
import UploadPageContainer from './upload_page/upload_page_container';
import SongPageContainer from './song_page/song_page_container';

const App = () => {
  // let renderPlayer;
  // GET THIS FROM A SLICE/REDUCER/GLOBAL STORE SITUATION
    // (This is for when I decide to make the player more dynamic)

  // if (this.playerIsActive) {
  //   renderPlayer = <PlayerContainer />;
  // }

  return (
    <div>
      <Switch>
        <ProtectedRoute path="/discover" component={DiscoverPageContainer} />
        <ProtectedRoute path="/upload" component={UploadPageContainer} />
        <ProtectedRoute
          path="/:username/:songTitle"
          component={SongPageContainer}
        />
        {/*<ProtectedRoute path="/you" component={YouPageContainer} />*/}
        <AuthRoute path="/" component={SplashPageContainer} />
      </Switch>
      <PlayerContainer />
    </div>
  );
};

export default App;
