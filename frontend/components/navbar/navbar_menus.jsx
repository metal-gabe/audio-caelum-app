import React, { Component } from 'react';

export const UserMenu = () => {
  return (
    <div className="menu-content">
      <ul>
        <li>
          <a
            href='https://gflujan.com'
            target='_blank'
          >
            Check out Gabe's website
          </a>
        </li>
        <li>
          <a href='https://gfl-lpw.herokuapp.com/#/' target='_blank'>
            Check out "LoL Pro Wins"
          </a>
        </li>
        <li>
          <a href='https://lets-parc.herokuapp.com/#/' target='_blank'>
            Check out "P.A.R.C."
          </a>
        </li>
      </ul>
    </div>
  );
};

export const SystemMenu = (props) => {
  return (
    <div className="menu-content">
      <ul>
        <li>
          <a href=''>About us</a>
        </li>
        <li>
          <a href='https://www.ca.gov/' target='_blank'>Legal</a>
        </li>
        <li>
          <a href='https://www.copyright.gov/'
            target='_blank'
          >
            Copyright
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href=''>Subscription</a>
        </li>
        <li>
          <a href=''>Settings</a>
        </li>
        <li>
          <a onClick={props.handleLogout}>Sign out</a>
        </li>
      </ul>
    </div>
  );
};
