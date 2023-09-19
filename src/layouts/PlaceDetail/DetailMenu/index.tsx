import React, { useState } from 'react';

import { $Values } from '@commons/Modal';
import Information from '@components/placeDetail/Information';
import Recommander from '@components/placeDetail/Recommander';
import Review from '@components/placeDetail/Review';
import { LayoutGroup } from 'framer-motion';

import { PlaceDetailMenuType } from '../../../constants/PlaceDetailMenuType';

import {
  AnimateBlock,
  DetailMenuWrapper,
  Menu,
  MenuWrapper,
  TextContainer,
} from './styled';

type PlaceDetailMenu = $Values<typeof PlaceDetailMenuType>;

type MenuList = {
  [key in PlaceDetailMenu]: string;
};

const DetailMenu = () => {
  const [selectMenuId, setSelectedMenuId] = useState<PlaceDetailMenuType>(
    PlaceDetailMenuType.RECOMMANDER,
  );
  const count = 123;
  const menuList = [
    {
      key: PlaceDetailMenuType.RECOMMANDER,
      value: '추천인 리뷰',
    },
    {
      key: PlaceDetailMenuType.INFORMATION,
      value: '가게정보',
    },
    {
      key: PlaceDetailMenuType.REVIEW,
      value: `후기(${count})`,
    },
  ];

  const changeSelectedMenu = (key: PlaceDetailMenu) => {
    setSelectedMenuId(PlaceDetailMenuType[key]);
  };

  return (
    <>
      <DetailMenuWrapper>
        <TextContainer>
          <LayoutGroup>
            {menuList.map((item, index) => {
              return (
                <MenuWrapper key={index}>
                  <Menu
                    className={'text-m-bold'}
                    key={index}
                    active={item.key === selectMenuId}
                    onClick={() => changeSelectedMenu(item.key)}
                  >
                    {item.value}
                  </Menu>
                  {item.key === selectMenuId && (
                    <AnimateBlock layoutId="block" />
                  )}
                </MenuWrapper>
              );
            })}
          </LayoutGroup>
        </TextContainer>
      </DetailMenuWrapper>
      {selectMenuId === PlaceDetailMenuType.RECOMMANDER && <Recommander />}
      {selectMenuId === PlaceDetailMenuType.INFORMATION && <Information />}
      {selectMenuId === PlaceDetailMenuType.REVIEW && <Review />}
    </>
  );
};

export default DetailMenu;
