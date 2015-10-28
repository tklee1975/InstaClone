
import Tree from 'Tree';
import feedGenerated from 'feed.gen.json';


/**
 * Load feed
 * @return {Promise} Thenable/Catcheable
 */
export function loadFeed() {
  return new Promise((resolve, reject) => {
    // for example =)
    resolve(feedGenerated.posts);
  })
  .then((response) => {
    Tree.select(['posts', 'feed']).set(response);
  })
  .catch((error) => {
    throw error;
  })
}

/**
 * Get post by it ID
 * @param  {Number} postId
 * @return {Promise}      Thenable/Catcheable
 */
export function getPost(postId) {
  return new Promise((resolve, reject) => {
    for (const post of feedGenerated.posts) {
      if (post.id == postId)
      {
        return resolve({ post });
      }
    }
    reject({ error: 'Not found', status: 404 });
  })
  .then((response) => {
    return response.post;
  })
  .catch((error) => {
    throw error;
  });
}
