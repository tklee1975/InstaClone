
import React, { Component } from 'react';


export default class IndexDefault extends Component {

  static propTypes = {
    children: React.PropTypes.any
  }

  render() {
    return (
      <div>
        <h1>IndexDefault</h1>
        <RouteHandler />
      </div>
    )
  }
}
