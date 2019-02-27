import React, { Component } from 'react'; 
import { Link, Redirect } from 'react-router-dom'; 

class EmailForm extends Component {
  render() { 
    return ( 
      <div> 
        <div className="modal-form"> 
          <a 
            className="btn-cats" 
            href="http://www.funnycatsite.com/" 
            target="_blank">
            Continue with Catbook
          </a> 
          <a 
            className="btn-dogs" 
            href="http://www.funnydogsite.com/" 
            target="_blank">
            Continue with Doggle
          </a> 
          <h2 className="divider"> or </h2> 
          <form onSubmit={this.props.handleSubmit}> 
            <input 
              type="text" 
              value={this.props.email} 
              placeholder="Your email address" 
              onChange={this.props.update('email')} 
            /> 
            <button>Continue</button> 
            <p className="need-help"><Link className="helper-link" to="">Need help?</Link></p> 
          </form> 
          <div className="disclaimers">
            <p> 
              We may use your email and devices for updates and tips on 
              AudioCaelum's products and services, and for activities notifications. <br /> 
              You can unsubscribe for free at any time in your notification settings. 
            </p> 
            <p> 
              We may use information you provide us in order to show you targeted ads 
              as described in our <Link className="helper-link" to="">Privacy Policy</Link>. 
            </p> 
          </div>
        </div> 
      </div> 
    ); 
  }; 
}; 

export default EmailForm; 
