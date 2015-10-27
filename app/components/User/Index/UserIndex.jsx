
import CN from 'classnames';
import css from './UserIndex.styl';
import React, { Component } from 'react';


export default class UserIndex extends Component {

  componentDidMount() {
    console.log('UserIndex')
  }

  /**
   * Render component UserIndex
   */
  render() {
    return (
      <div className={CN(css.UserIndex)}>
      </div>
    );
  }
}
