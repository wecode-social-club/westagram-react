import React, { useState } from 'react';

function Comment(props) {
  const [isLiked, setIsLiked] = useState(props.isLiked);
  return (
    <li>
      {props.userName} {props.comment}
      <button
        onClick={() => setIsLiked(!isLiked)}
        style={{ color: isLiked ? 'red' : 'blue' }}
      >
        좋아요 버튼
      </button>
    </li>
  );
}

export default Comment;
