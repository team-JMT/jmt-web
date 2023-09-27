import React, { useState } from 'react';

import { BottomWrapper, WayButton } from './styled';

// TODO 불필요한 추상화
const BottomBar = () => {
  const [isLike, setIsLike] = useState(false);
  const onClickHeart = (isLike: boolean) => {
    setIsLike(!isLike);
  };
  return (
    <BottomWrapper>
      {/*<Heart className={'text-s-medium'} onClick={() => onClickHeart(isLike)}>*/}
      {/*  <img src={isLike ? FilledHeartIcon : HeartIcon} />*/}
      {/*  121*/}
      {/*</Heart>*/}
      <WayButton className={'title-s-medium'}>길찾기</WayButton>
    </BottomWrapper>
  );
};

export default BottomBar;
