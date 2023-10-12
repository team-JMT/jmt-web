import React, { useState } from 'react';

import { nativeInfo } from '@utils/storage';

import { BottomWrapper, WayButton } from './styled';

interface Props {
  name: string;
  x: number;
  y: number;
}
// TODO 불필요한 추상화
const BottomBar = ({ name, x, y }: Props) => {
  const [isLike, setIsLike] = useState(false);
  const onClickHeart = (isLike: boolean) => {
    setIsLike(!isLike);
  };
  const userLocation = nativeInfo.getData().userPosition;

  const LinkSearchRoad = () => {
    window.location.href = `nmap://route/public?slat=${userLocation.y}&slng=${userLocation.x}&sname=내위치&dlat=${y}&dlng=${x}&dname=${name}`;
    //네이버 앱으로 길찾기 실행
    //`nmap://route/public?slat=${userLocation.y}&slng=${userLocation.x}&sname=내위치&dlat=${y}&dlng=${x}&dname=${name}`
    //모바일 웹 , 길찾기 화면으로 이동은 되는데 위치 설정이 아무것도 안돼요..
    //`http://m.map.naver.com/route.nhn?menu=route&sname=내위치&sx=${userLocation.x}&sy=${userLocation.y}&ename=${name}&ex=${x}&ey=${y}&pathType=0&showMap=true`
    //pc버전, pc버전에서 진행하면 위치도 다 입력되서 들어가지만 모바일에서 실행하면 모바일 웹 사이트로 갑니다
    //http://map.naver.com/index.nhn?slng=${userLocation.x}&slat=${userLocation.y}&stext=내위치&elng=${x}&elat=${y}&etext=${name}&menu=route&pathType=1
  };
  return (
    <BottomWrapper>
      {/*<Heart className={'text-s-medium'} onClick={() => onClickHeart(isLike)}>*/}
      {/*  <img src={isLike ? FilledHeartIcon : HeartIcon} />*/}
      {/*  121*/}
      {/*</Heart>*/}
      <WayButton className={'title-s-medium'} onClick={LinkSearchRoad}>
        길찾기
      </WayButton>
    </BottomWrapper>
  );
};

export default BottomBar;
