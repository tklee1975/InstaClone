
import CN from 'classnames';
import css from './Header.styl';

import React, { Component } from 'react';

export default class Header extends Component {

  static propTypes = {
    children: React.PropTypes.any,
    theme: React.PropTypes.string
  }

  static defaultProps = {
    theme: 'Light'
  }

  static Theme = {
    Dark: css.ThemeDark,
    Light: css.ThemeLight
  };

  /**
   * Render element
   */
  render() {
    let theme = this.props.theme;

    return (
      <header className={CN(css.Header, theme)}>
        {this.props.children}
      </header>
    );
  }
}
