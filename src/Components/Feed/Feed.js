import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import Images from './Images/Images';
import UserActions from './UserActions/UserActions';
import Comments from './Comments/Comments';
import './Feed.scss';

function Feed(props) {
  return (
    <div className="Feed">
      <UserInfo userName={props.data.authorName} />
      <Images imgs={props.data.feedImages} />
      <UserActions isLiked={props.data.isLiked} />
      <Comments data={props.data.comments} />
    </div>
  );
}

export default Feed;
