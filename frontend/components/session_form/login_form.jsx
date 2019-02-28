import React, { Component } from 'react'; 
import { Link, Redirect } from 'react-router-dom'; 

class LoginForm extends Component { 
  render() { 
    return ( 
      <div className="modal-login-form"> 
        <form> 
          <input 
            className="return-to-email" 
            type="submit" 
            value={this.props.email} 
            onClick={this.props.updateFormComponent('EmailForm')} 
          /> 
          <input 
            type="password" 
            value={this.props.password} 
            placeholder="Your password *" 
            onChange={this.props.update('password')} 
          /> 
          <button onSubmit={this.props.handleLogin}>Sign in</button> 
          <p className="no-password"> 
            <Link className="helper-link" to="">Don't know your password?</Link> 
          </p> 
        </form> 
      </div> 
    ); 
  }; 
}; 

export default LoginForm; 
