import css from './ApplicationBase.styl';
import React, { Component } from 'react';
import { root as Root } from 'baobab-react/higher-order';
import Tree from 'Tree';

import ApplicationHeader from 'Application/Header/ApplicationHeader';


class ApplicationBase extends Component {

  static propTypes = {
    children: React.PropTypes.any
  };

  static childContextTypes = {
    currentUser: React.PropTypes.shape({
      id: React.PropTypes.number,
      username: React.PropTypes.string,
      profilePictureUrl: React.PropTypes.string,
      fillName: React.PropTypes.string,
      counts: React.PropTypes.object,
      hasProfilePic: React.PropTypes.bool,
    })
  };

  getChildContext() {
    return {
      currentUser: {
        id: null // not authorized
      }
    };
  }

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