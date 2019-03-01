import React from 'react'; 
import { Link, Redirect, Route } from 'react-router-dom'; 
import SessionFormContainer from './session_form/session_form_container'; 
import SplashContainer from './splash/splash_container'; 

const App = () => { 
  return ( 
    <div> 
      <SplashContainer /> 
    </div> 
  ); 
}; 

export default App; 
