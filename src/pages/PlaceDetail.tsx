import { useState } from 'react';

//import { css } from '@emotion/react';
//import styled from '@emotion/styled';

import { AppScreen } from '@stackflow/plugin-basic-ui';
//import { AnimatePresence } from 'framer-motion';

import leftArrowIcon from '../assets/icons/leftArrow.svg';
import rightArrowIcon from '../assets/icons/rightArrow.svg';
import shareIcon from '../assets/icons/share.svg';
import threeBotsIcon from '../assets/icons/threeBots.svg';
import verticalBarIcon from '../assets/icons/verticalBar.svg';
import BottomBar from '../components/placeDetail/BottomBar';
//import DetailBottomSheet from '../components/placeDetail/DetailBottomSheet';
import DetailMenu from '../components/placeDetail/DetailMenu';
import ImgContainer from '../components/placeDetail/ImgContainer';
import { useHomeFlow } from '../stacks/homeStackFlow';
import './PlaceDetail.scss';

//import { styled } from '@tanstack/react-query-devtools/build/lib/utils';

const imgArray = ['./img1.png', './img2.png', './img3.png'];

const PlaceDetail = () => {
  const { pop } = useHomeFlow();

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const MoreButton = () => (
    <div className="more-button" onClick={handleOpen}>
      <img src={threeBotsIcon} />
    </div>
  );
  return (
    <AppScreen
      appBar={{
        title: '상세페이지',
        backButton: {
          render: () => (
            <button className={'back-button'} onClick={pop}>
              <img src={leftArrowIcon} />
            </button>
          ),
        },
        appendRight: MoreButton,
        //https://github.com/daangn/stackflow/blob/main/demo/src/activities/Main.tsx
        height: '48px',
      }}
    >
      {/*<AnimatePresence>
        <DetailBottomSheet isOpen={isOpen} onClose={handleClose} />
      </AnimatePresence>*/}
      <main className={'safe-area-layout-container'}>
        {imgArray.length > 0 && <ImgContainer imgArray={imgArray} />}
        {/* 이미지 배열의 길이가 0일 경우 imgContainer는 나타나지 않게 하기*/}
        <div className={'detail-container'}>
          <div className={'name-box'}>
            <div className={'text-m-medium'}>유저이름&nbsp;&nbsp;</div>
            <img src={rightArrowIcon} />
          </div>
          <div className={'title-box'}>
            <div className={'title-s-bold'}>돈까스 맛있겠다</div>
            <img src={shareIcon} />
          </div>
          <div className={'add-box'}>
            <div>위치에서 2020m</div>
            <img src={verticalBarIcon} />
            <div className={'gray'}>중식</div>
          </div>
          <DetailMenu />
        </div>
      </main>
      <BottomBar />
    </AppScreen>
  );
};

export default PlaceDetail;
