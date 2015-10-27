
import CN from 'classnames';
import css from './PhotoPage.styl';
import React, { Component } from 'react';


export default class PhotoPage extends Component {

  componentDidMount() {
    console.log('PhotoPage')
  }

  /**
   * Render component PhotoPage
   */
  render() {
    return (
      <div className={CN(css.PhotoPage)}>
      </div>
    );
  }
}
