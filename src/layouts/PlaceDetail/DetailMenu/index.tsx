import React, { useState, useEffect, useRef } from 'react';

import Information from '@components/placeDetail/Information';
import Recommander from '@components/placeDetail/Recommander';
import Review from '@components/placeDetail/Review';

import { DetailMenuWrapper, Menu, TextContainer, AnimateBlock } from './styled';

const DetailMenu = () => {
  const [[selectedMenu, pastMenu], setSelectedMenu] = useState([0, 0]);
  const count = 123;
  const menuList = ['추천인 리뷰', '가게정보', '후기(' + count + ')'];

  const blockRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (blockRef.current) {
        const blockWidth = blockRef.current.offsetWidth;
        setWidth(blockWidth);
      }
    };
    handleResize(); // 초기값 설정
  }, []);

  const changeSelectedMenu = (menu: number) => {
    if (menu !== selectedMenu) {
      setSelectedMenu([menu, selectedMenu]);
    }
  };

  return (
    <>
      <DetailMenuWrapper>
        <AnimateBlock
          ref={blockRef}
          initial={{ x: pastMenu * width }}
          animate={{ x: selectedMenu * width }}
          transition={{ duration: 0.2 }}
        />
        <TextContainer>
          {menuList.map((item, index) => {
            return (
              <Menu
                className={'text-m-bold'}
                key={index}
                active={index === selectedMenu}
                onClick={() => changeSelectedMenu(index)}
              >
                {item}
              </Menu>
            );
          })}
        </TextContainer>
      </DetailMenuWrapper>
      {selectedMenu === 0 ? (
        <Recommander />
      ) : selectedMenu === 1 ? (
        <Information />
      ) : (
        <Review />
      )}
    </>
  );
};

export default DetailMenu;
