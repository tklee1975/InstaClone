
import CN from 'classnames';
import css from './PhotoPost.styl';
import { Link } from 'react-router';
import React, { Component } from 'react';
import iconHeart from 'images/heart.svg';

import { getPost } from 'actions/feedActions';
import { likePhotoByUser } from 'actions/photoActions';
import { MergeObjects } from 'utils/tools';

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

  static contextTypes = {
    currentUser: React.PropTypes.shape({
      id: React.PropTypes.number,
      username: React.PropTypes.string,
      profilePictureUrl: React.PropTypes.string,
      fillName: React.PropTypes.string,
      counts: React.PropTypes.object,
      hasProfilePic: React.PropTypes.bool,
    })
  };


  state = {
    content: {
      owner: {},
      date: {},
      src: '',
      comments: [],
      likedByViewer: false
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
    let nextLikes = this.state.content.likes;
    if (this.state.content.likedByViewer) {
      // if already liked
      nextLikes--;
    }
    else {
      // add liker
      nextLikes++;
    }

    const nextPhotoObject = MergeObjects(this.state.content, {
      likedByViewer: !this.state.content.likedByViewer,
      likes: nextLikes
    });

    this.setState({ content: nextPhotoObject});
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
    const post = this.state.content;

    if (post.likes > 0) {
      likes = (
        <section className="Likes">
          {`${post.likes} ${post.likes == 1 ? 'Like' : 'Likes'}`}
        </section>
      );
    }

    return (
      <div className="Info">
        {likes}
        <section className="Comments">
          {post.comments.map((comment) => {
            var lines = comment.text.split("\n");

            return (
              <div className="comment" key={comment.id}>
                <h1><Link to={`/${comment.userName}/`}>{comment.userName}</Link></h1>
                {lines.map((line, num) => <span key={num}>{line}<br/></span>)}
              </div>
            );
          })}
        </section>
        <section className="WriteNewComment">
          <figure onClick={this::this.handleLike} className={CN({ Liked: post.likedByViewer })}
            dangerouslySetInnerHTML={{ __html: iconHeart }} />
        </section>
      </div>
    );
  }
}
