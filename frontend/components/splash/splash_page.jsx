import React, { Component } from 'react'; 
import { Link, Redirect, Route } from 'react-router-dom'; 
import SessionFormContainer from '../session_form/session_form_container'; 

class SplashPage extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      modalIsOpen: false, 
    }; 
    this.toggleModal = this.toggleModal.bind(this); 
  }; 

  toggleModal() { 
    this.setState({ modalIsOpen: !this.state.modalIsOpen, }); 
  }; 

  render() { 
    const renderSessionForm = this.state.modalIsOpen ? 
      <SessionFormContainer toggleModal={this.toggleModal} /> : null 

    return ( 
      <header> 
        <h1>AudioCaelum</h1> 
        <div><Link to="" onClick={this.toggleModal}>Sign In</Link></div> 
        <div><Link to="" onClick={this.toggleModal}>Create Account</Link></div> 
        {renderSessionForm} 
      </header> 
    ); 
  }; 
}; 

export default SplashPage; 
