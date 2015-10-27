
import Tree from 'Tree';
import feedGenerated from 'feed.gen.json';


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