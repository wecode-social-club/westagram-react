import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import './Comments.scss';

function Comments(props) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState(props.data);

  const onChange = event => {
    setComment(event.target.value);
  };

  const addComment = () => {
    setCommentList([...commentList, comment]);
    setComment('');
  };

  return (
    <div>
      <ul>
        {commentList.map(c => {
          return (
            <Comment
              userName={c.userName}
              comment={c.comment}
              isLiked={c.isLiked}
            />
          );
        })}
      </ul>
      <input value={comment} onChange={onChange} />
      <button onClick={addComment}>게시</button>
    </div>
  );
}

export default Comments;
