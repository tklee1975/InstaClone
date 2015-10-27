
import React, { Component } from 'react';

import HeaderBase from 'Compi/Header';

export default class ApplicationBase extends Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render() {
    return (
      <div>
        <HeaderBase theme={HeaderBase.Theme.Dark}>
          <div>1</div>
        </HeaderBase>
        {this.props.children}
      </div>
    );
  }
}