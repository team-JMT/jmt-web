import React, { useState } from 'react';

import FilledHeartIcon from '../../../assets/icons/filledHeart.svg';
import HeartIcon from '../../../assets/icons/heart.svg';

import { BottomWrapper, Heart, WayButton } from './styled';

const BottomBar = () => {
  const [isLike, setIsLike] = useState(false);
  const onClickHeart = (isLike: boolean) => {
    setIsLike(!isLike);
  };
  return (
    <BottomWrapper>
      <Heart className={'text-s-medium'} onClick={() => onClickHeart(isLike)}>
        <img src={isLike ? FilledHeartIcon : HeartIcon} />
        121
      </Heart>
      <WayButton className={'title-s-medium'}>길찾기</WayButton>
    </BottomWrapper>
  );
};

export default BottomBar;
