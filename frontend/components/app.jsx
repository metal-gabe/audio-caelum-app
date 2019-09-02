import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PlayerContainer from './player/player_container';
import SplashPageContainer from './splash_page/splash_page_container';
import DiscoverPageContainer from './discover_page/discover_page_container';
import UploadPageContainer from './upload_page/upload_page_container';
import SongPageContainer from './song_page/song_page_container';

const App = () => {
  // let renderPlayer;
  // GET THIS FROM A SLICE/REDUCER/GLOBAL STORE SITUATION
  // ---- (This is for when I decide to make the player more dynamic)

  // if (this.playerIsActive) {
  //   renderPlayer = <PlayerContainer />;
  // }

  return (
    <div>
      <Switch>
        <ProtectedRoute component={DiscoverPageContainer} path="/discover" />
        <ProtectedRoute component={UploadPageContainer} path="/upload" />
        <ProtectedRoute
          component={SongPageContainer}
          path="/:username/:songTitle"
        />
        {/* <ProtectedRoute path="/you" component={YouPageContainer} /> */}
        <AuthRoute component={SplashPageContainer} path="/" />
      </Switch>
      <PlayerContainer />
    </div>
  );
};

export default App;
