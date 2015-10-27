
import CN from 'classnames';
import css from './PhotoPost.styl';
import React, { Component } from 'react';


export default class PhotoPost extends Component {

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    variant: React.PropTypes.oneOf(['feed'])
  };

  static defaultProps = {
    variant: 'feed'
  };

  /**
   * Render component PhotoPost
   */
  render() {
    return (
      <div className={CN(css.PhotoPost, `Variant-${this.props.variant}`)}>

      </div>
    );
  }
}
