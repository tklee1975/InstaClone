
import CN from 'classnames';
import css from './ApplicationHeader.styl';
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ApplicationHeader extends Component {

  /**
   * Render component ApplicationHeader
   */
  render() {
    return (
      <nav className={CN(css.ApplicationHeader)}>
        <div className={css.HeaderMain}>
          <Link to="/" className="Instaclone">Instaclone</Link>
          <div className="searchBox">
            <input type="text" placeholder="Search" />
          </div>
          <Link to="/register">Login</Link>
        </div>
      </nav>
    );
  }
}
