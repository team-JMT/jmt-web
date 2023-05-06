import React from 'react';

import styled from '@emotion/styled';
import testImg from './testImg.png';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const imgArray = ['./testImg.png', './testImg.png', './testImg.png'];
const ImgContainer = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {imgArray.map(
          (
            item,
            index, //active 설정 해ㅈ줘야 함
          ) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <img className={'d-block w-100'} src={testImg} alt={item} />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

{
  /*        <DotContainer>
{imageArray.map((index) => {
<div style={{opacity: 1 - Math.abs((activeIndex - index) * 0.2) }} />
</DotContainer>
); */
}
const Image = styled.div<{ imgUrl: string }>`
  width: 100%;
`;
export default ImgContainer;
