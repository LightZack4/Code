import React, { useState } from 'react';
import { AiFillLike} from "react-icons/ai";
function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className='blok-nbrJaim-buton'>
      
      <button className='likebuton' onClick={handleLikeClick}><AiFillLike className='iconlike'/> Like {likes}</button>
      
    </div>
  );
}

export default LikeButton;