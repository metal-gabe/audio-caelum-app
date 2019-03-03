import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

class LoginForm extends Component {
  render() {
    let renderErrors;
    if (this.props.errors) {
      renderErrors = <p className="errors">{this.props.errors}</p>;
    }

    return (
      <div className="modal-login-form">
        <form>
          <input
            className="return-to-email"
            type="button"
            value={this.props.email}
            onClick={() => this.props.updateFormComponent('EmailFormView')}
          />
          <input
            autoFocus
            type="password"
            value={this.props.password}
            placeholder="Your password *"
            onChange={this.props.update('password')}
          />
          {renderErrors}
          <button onClick={this.props.handleLogin}>Sign in</button>
          <p className="no-password">
            <Link className="helper-link" to="">Don't know your password?</Link>
          </p>
        </form>
      </div>
    );
  };
};

export default LoginForm;
