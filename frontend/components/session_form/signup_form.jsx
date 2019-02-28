import React, { Component } from 'react'; 
import { Link, Redirect } from 'react-router-dom'; 

class SignupForm extends Component { 
  render() { 
    return ( 
      <div className="modal-signup-form"> 
        <h1>Create your AudioCaelum account</h1> 
        <form> 
          <input 
            className="return-to-email" 
            type="button" 
            value={this.props.email} 
            onClick={() => this.props.updateFormComponent('EmailForm')} 
          /> 
          <p className="choose-password">Choose a password <span>*</span></p> 
          <input 
            type="password" 
            value={this.props.password} 
            onChange={this.props.update('password')} 
          /> 
          <div className="captcha"> 
            <div> 
              <input className="checkbox" type="checkbox" /> 
              <div>We believe that you're not a robot.</div> 
            </div> 
            <div>
              <img src={window.images.CaptchaLogo} alt="reCAPTCHA" /> 
            </div>
          </div> 
          <p>By signing up...</p> 
          <button onSubmit={this.props.handleSignup}>Accept & continue</button> 
          <div className="signin-reminder"> 
            <h3>Are you trying to sign in?</h3> 
            The email address that you entered was not found. <br /> 
            Double-check your email address. 
          </div> 
        </form> 
      </div> 
    ); 
  }; 
}; 

export default SignupForm; 
