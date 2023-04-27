import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [liked, setLikeStatus] = useState(false);

  const toggle = () => {
    setLikeStatus(!liked);
    onClick();
  };

  if (liked) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
}

export default Like;
