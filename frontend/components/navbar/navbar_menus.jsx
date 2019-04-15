import React, { Component } from 'react';

export const UserMenu = () => {
  return (
    <div className="menu-content">
      <ul>
        <li>
          <a href="https://gfl-lpw.herokuapp.com/#/" target="_blank">
            Check out LoL Pro Wins
          </a>
        </li>
        <li>
          <a href="https://lets-parc.herokuapp.com/#/" target="_blank">
            Check out P.A.R.C.
          </a>
        </li>
        <li>
          <a href="http://gfl-jammming.herokuapp.com" target="_blank">
            Check out Jammming
          </a>
        </li>
        <li>
          <a href="http://gfl-ravenous.herokuapp.com" target="_blank">
            Check out Ravenous
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
          <a href="https://gflujan.com">About the dev</a>
        </li>
        <li>
          <a href="https://www.ca.gov/" target="_blank">CA Legal Info</a>
        </li>
        <li>
          <a href="https://www.copyright.gov/"
            target="_blank"
          >
            Copyright.gov
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="http://www.looknohands.com/chordhouse/"
            target="_blank"
          >
            Look, no hands!
          </a>
        </li>
        <li>
          <a
            href="https://nexus.leagueoflegends.com/en-us/esports/"
            target="_blank"
          >
            LoL Esports
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a onClick={props.handleLogout}>Sign out</a>
        </li>
      </ul>
    </div>
  );
};
