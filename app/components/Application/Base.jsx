
import React, { Component } from 'react';


export default class ApplicationBase extends Component {

  static propTypes = {
    children: React.PropTypes.any
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}