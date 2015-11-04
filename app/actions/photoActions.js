


/**
 *
 * @author Sergey Sova
 * @param  {Object} photo
 * @param  {Object} user
 * @returns {Boolean} Does photo liked by specified user
 */
export function photoLikedBy(photo, user) {
  for (const liker of photo.likers) {
    if (liker.username == user.username) {
      return true;
    }
  }
  return false;
}



/**
 *
 * @param  {Object} photo
 * @param  {Object} user
 * @returns {Object} Changed photo
 */
export function likePhotoByUser(photo, user) {
  photo.likers.push({
    counts: {},
    id: user.id,
    profilePictureUrl: 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-19/s150x150/12105201_510136872486649_2028099667_a.jpg', // hard-coded
    username: user.username
  });

  return photo;
}

