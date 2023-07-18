import React from 'react';

import Preparing from '@assets/mock/Preparing';
import styled from '@emotion/styled';

const Review = () => {
  return (
    <ReviewWrapper>
      <Preparing />
    </ReviewWrapper>
  );
};

export default Review;

const ReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vh;
`;
