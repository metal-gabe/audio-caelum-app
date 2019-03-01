import React from 'react'; 
import { Link, Redirect, Route, Switch } from 'react-router-dom'; 
import NavbarContainer from './globals/navbar_container'; 
import PlayerContainer from './globals/player_container'; 
import SessionFormContainer from './session_form/session_form_container'; 
import SplashPageContainer from './splash/splash_page_container'; 
import DiscoverPageContainer from './discover_page/discover_page_container'; 
import UploadPageContainer from './upload_page/upload_page_container'; 

// Can/should I put some conditional rendering here if the user is logged in? 
// If they aren't, I will render SplashPageContainer (use an AuthRoute?) 
const App = () => { 
  return ( 
    <div> 
      <NavbarContainer /> 
      <Switch> 
        <Route path="/discover" component={DiscoverPageContainer} /> 
        <Route path="/upload" component={UploadPageContainer} /> 
        <Route path="/" component={SplashPageContainer} /> 
      </Switch> 
      <PlayerContainer /> 
    </div> 
  ); 
}; 

export default App; 
