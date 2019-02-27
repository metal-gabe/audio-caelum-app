import React from 'react'; 
import { Route, Link } from 'react-router-dom'; 
// Import other containers here 

const App = () => { 
  return ( 
    <div> 
      <header> 
        <h1>AudioCaelum</h1> 
        <div><Link to="">Sign In</Link></div> 
        <div><Link to="">Create Account</Link></div> 

        {/* I need to add an AuthRoute here for the SessionForm modal */} 
      </header> 
    </div> 
  ); 
}; 

export default App; 
