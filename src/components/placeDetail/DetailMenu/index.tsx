import React from 'react';

import Information from '../Information';
import Recommander from '../Recommander';
import Review from '../Review';

import { DetailMenuWrapper, Menu } from './styled';

type CategoryMenuProps = {
  onClick?: (url: string) => void;
  type: string;
  count: number;
};

const DetailMenu: React.FC<CategoryMenuProps> = ({ onClick, type, count }) => {
  const menuList = [
    {
      menu: 'recommander',
      korean: '추천인 리뷰',
    },
    {
      menu: 'information',
      korean: '가게 정보',
    },
    { menu: 'review', korean: '후기(' + count + ')' },
  ];
  return (
    <>
      <DetailMenuWrapper>
        {menuList.map((item, id) => {
          return (
            <Menu
              className={'text-m-medium'}
              key={id}
              active={type === item.menu}
              onClick={() => onClick && onClick(item.menu)}
            >
              {item.korean}
            </Menu>
          );
        })}
      </DetailMenuWrapper>
      {type === 'recommander' ? (
        <Recommander />
      ) : type === 'information' ? (
        <Information />
      ) : (
        <Review />
      )}
    </>
  );
};

export default DetailMenu;
