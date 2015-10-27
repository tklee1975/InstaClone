
import CN from 'classnames';
import css from './Button.styl';

import React, { Component } from 'react';

export default class Button extends Component {

  static propTypes = {
    children: React.PropTypes.any
  }


  /**
   * Render component
   */
  render() {
    return (
      <button>{this.props.children}</button>
    );
  }
}
