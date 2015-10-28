
import CN from 'classnames';
import css from './PhotoPost.styl';
import React, { Component } from 'react';
import { Link } from 'react-router';

import { getPost } from 'actions/feedActions';

import PhotoBox from 'Photo/Box/PhotoBox';


export default class PhotoPost extends Component {

  static propTypes = {
    id: React.PropTypes.number.isRequired,
    variant: React.PropTypes.oneOf(['feed']),
    post: React.PropTypes.object
  };

  static defaultProps = {
    post: null,
    variant: 'feed'
  };

  state = {
    content: {
      owner: {},
      date: {},
      src: ''
    },
    error: null
  };

  componentDidMount() {
    if (this.props.post) {
      this.setState({ content: this.props.post });
    }
    else {
      getPost(this.props.id).then((post) => {
        this.setState({ content: post });
      })
      .catch((error) => {
        this.setState({ error });
      });
    }
  }

  handleLike() {
    console.log('Like()?');
  }

  /**
   * Render component PhotoPost
   */
  render() {
    const post = this.state.content;

    return (
      <article className={CN(css.PhotoPost, `Variant-${this.props.variant}`)}>
        <header>
          <img className="OwnerAvatar" src={post.owner.profilePictureUrl} title={post.owner.fullName} />
          <div className="Owner">
            <Link to={`/${post.owner.username}/`}>{post.owner.username}</Link>
          </div>
          <Link to={`${post.href}`} className="Reference">
            <time title={`${post.date.day} ${post.date.month_name} ${post.date.year} ${post.date.time}`}>{`${post.date.day} ${post.date.month_name}`}</time>
          </Link>
        </header>
        <div className="Media">
          <PhotoBox dimensions={post.dimensions} caption={post.caption} src={post.src} onLike={this::this.handleLike} />
        </div>
        {this.renderInfo()}
      </article>
    );
  }

  renderInfo() {
    let likes = null;

    if (this.state.content.likes > 0) {
      likes = (
        <section className="Likes">
          {`${this.state.content.likes} ${this.state.content.likes == 1 ? 'Like' : 'Likes'}`}
        </section>
      );
    }
    return (
      <div className="Info">
        {likes}
        <section className="Comments">
        </section>
        <section className="WriteNewComment">
          Write comment
        </section>
      </div>
    );
  }
}
