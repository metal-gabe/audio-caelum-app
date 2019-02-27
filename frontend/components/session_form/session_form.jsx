import React, { Component } from 'react'; 
import { Link, Redirect } from 'react-router-dom'; 

class SessionForm extends Component {
  constructor(props) { 
    super(props); 
    this.state = { 
      username: '', 
      password: '', 
      email: '', 
    }; 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }; 

  update(field) { 
    return ((e) => this.setState({ 
      [field]: e.target.value, 
    })); 
  }; 

  handleSubmit(e) { 
    e.preventDefault(); 
    // The line below creates a new copy of the user object / local state 
    // But is it really needed? 
    const user = Object.assign({}, this.state); 
    this.props.processForm(user); 
  }; 

  render() {}; 
}; 

// NOTE: I need to create a Part A && a Part B of this session form 
  // Part A verifies the user's email 
  // Part B verifies the user's password 

// Because of this note, update the status errors on the back end to include/separate 
  // notifications for each field 

// If the user's email doesn't exist, Part A has dual functionality, it will move to Part C 
  // Part C goes into account creation mode and will create a new user 

// The only time there's an error from Part A is when the field first gets focus, something is typed 
  // then the field is emptied/empty and the user navigates away from that field 

// Ignore the Goog/Fb options and the "Privacy Policy" && "Need help?" links 

// The text below the submit button is a good place for an easter egg 
