
import CN from 'classnames';
import css from './FeedIndex.styl';
import React, { Component } from 'react';

import { loadFeed } from 'actions/feedActions';

import PhotoPost from 'Photo/Post/PhotoPost';


@SubscribedTo('posts.feed')
export default class FeedIndex extends Component {

  static propTypes = {
    postsFeed: React.PropTypes.array.isRequired
  };

  componentWillMount() {
    loadFeed();
  }

  /**
   * Render component FeedIndex
   */
  render() {
    return (
      <main className={CN(css.FeedIndex)}>
        <section className={css.FeedRoot}>
          <div className={css.FeedList}>
            {this.props.postsFeed.map((post) => <PhotoPost id={post.id} post={post} key={post.code} />)}
          </div>
        </section>
      </main>
    );
  }
}
