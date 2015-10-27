import css from './ApplicationBase.styl';
import React, { Component } from 'react';

import ApplicationHeader from 'Application/Header/ApplicationHeader';


export default class ApplicationBase extends Component {

  static propTypes = {
    children: React.PropTypes.any
  };

  render() {
    return (
      <section className={css.ApplicationBase}>
        <ApplicationHeader />
        {this.props.children}
      </section>
    );
  }
}
