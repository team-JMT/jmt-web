import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.css';

import testImg from './img1.png';

const testimgArray = ['./img1.png', './img2.png', './img3.png'];

type ImgProps = {
  imgArray: string[];
};

const ImgContainer = ({ imgArray }: ImgProps) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <ImgWrapper>
      <StyledCarousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null} //자동으로 돌아가지 않도록
        prevIcon={<span className="visually-hidden"></span>}
        nextIcon={<span className="visually-hidden"></span>}
        indicators={false}
      >
        {testimgArray.map((item, index) => (
          <Carousel.Item key={index}>
            <PlaceImg imgUrl={testImg} />
          </Carousel.Item>
        ))}
      </StyledCarousel>
      <ImgNumber className={'text-m-medium'}>
        {index + 1} / {imgArray.length}
      </ImgNumber>
    </ImgWrapper>
  );
};

const StyledCarousel = styled(Carousel)`
  //indicator 스타일링
`;
const ImgWrapper = styled.div`
  position: relative;
`;
const PlaceImg = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: calc(100vw * 0.67);
  background: url(${(props) => props.imgUrl});
  background-size: cover;
`;
const ImgNumber = styled.div`
  position: absolute;
  right: 11px;
  bottom: 7px;
  color: white;
`;

export default ImgContainer;
