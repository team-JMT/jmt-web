import React, { useState } from 'react';

//import { css } from '@emotion/react';
//import styled from '@emotion/styled';

import { AppScreen } from '@stackflow/plugin-basic-ui';
//import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import leftArrowIcon from '../assets/icons/leftArrow.svg';
import rightArrowIcon from '../assets/icons/rightArrow.svg';
import shareIcon from '../assets/icons/share.svg';
import verticalBarIcon from '../assets/icons/verticalBar.svg';
import DetailMenu from '../components/placeDetail/DetailMenu';
import ImgContainer from '../components/placeDetail/ImgContainer';
import { useSearchFlow } from '../stacks/searchStackFlow';
import './PlaceDetail.scss';

//import { styled } from '@tanstack/react-query-devtools/build/lib/utils';

const PlaceDetail = () => {
  const { pop } = useSearchFlow();
  const [SelectedMenu, setSelectedMenu] = useState('recommander');

  const changeSelectedMenu = (menu: string) => {
    setSelectedMenu(menu);
  };
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
        height: '48px',
      }}
    >
      <main className={'safe-area-layout-container'}>
        <ImgContainer />
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
          <DetailMenu type={SelectedMenu} onClick={changeSelectedMenu} />
        </div>
      </main>
    </AppScreen>
  );
};

export default PlaceDetail;
