
import CN from 'classnames';
import css from './PhotoBox.styl';
import React, { Component } from 'react';


export default class PhotoBox extends Component {

  static propTypes = {
    src: React.PropTypes.string.isRequired,
    onLike: React.PropTypes.func,
    dimensions: React.PropTypes.shape({
      width: React.PropTypes.number,
      height: React.PropTypes.number
    }),
    caption: React.PropTypes.string
  };

  static defaultProps = {
    onLike: () => {},
    dimensions: {
      width: 512,
      height: 512
    },
    caption: ''
  };

  /**
   * Render component PhotoBox
   */
  render() {
    return (
      <figure className={CN(css.PhotoBox)} onDoubleClick={this.props.onLike}>
        <img src={this.props.src} />
      </figure>
    );
  }
}
