import css from './ApplicationBase.styl';
import React, { Component } from 'react';
import { root as Root } from 'baobab-react/higher-order';
import Tree from 'Tree';

import ApplicationHeader from 'Application/Header/ApplicationHeader';


class ApplicationBase extends Component {

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


export default Root(ApplicationBase, Tree);