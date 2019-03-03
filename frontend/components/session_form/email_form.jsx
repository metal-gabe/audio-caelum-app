import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentErrors: null,
    };
    // this.myOnBlur = this.myOnBlur.bind(this);
  };

  // This is to render the error when the input field is empty
  // and also when the input field does not have focus
  // myOnBlur() {
  //   let hasErrors = (this.props.email === '' ? true : false);
  //   this.setState({ currentErrors: hasErrors });
  // };

  render() {
    let renderErrors;
    // if (this.state.currentErrors === true) { // this version is connected to the myOnBlur above
      // this.setState({ disabled: 'disabled' });
    if (this.props.email === '') {
      renderErrors = <p className="errors">Enter a valid email address</p>;
    }

    return (
      <div className="modal-email-form">
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
        <form onSubmit={this.props.checkEmail(this.props.email)}>
          <input
            autoFocus
            type="email"
            value={this.props.email}
            placeholder="Your email address *"
            onChange={this.props.update('email')}
          />
          {renderErrors}
          <button>Continue</button>
        </form>
        <p className="need-help">
          <a className="helper-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Need help?</a>
        </p>
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
    );
  };
};

export default EmailForm;
