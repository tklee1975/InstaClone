
import CN from 'classnames';
import css from './FeedIndex.styl';
import React, { Component } from 'react';


export default class FeedIndex extends Component {

  componentDidMount() {
    console.log('FeedIndex')
  }

  /**
   * Render component FeedIndex
   */
  render() {
    return (
      <main className={CN(css.FeedIndex)}>

      </main>
    );
  }
}
