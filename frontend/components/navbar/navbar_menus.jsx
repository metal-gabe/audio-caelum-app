import React, { Component } from 'react';

export const UserMenu = () => {
  return (
    <div className="menu-content">
      I'm the user menu.
    </div>
  );
};

export const SystemMenu = (props) => {
  return (
    <div className="menu-content">
      <ul>
        <li>About us</li>
        <li>Legal</li>
        <li>Copyright</li>
      </ul>
      <ul>
        <li>Subscription</li>
        <li>Settings</li>
        <li onClick={props.handleLogout}>Sign out</li>
      </ul>
    </div>
  );
};
