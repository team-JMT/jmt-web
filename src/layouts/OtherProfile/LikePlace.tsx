import Preparing from '@assets/mock/Preparing';
import styled from '@emotion/styled';

const LikePlace = () => {
  return (
    <PrepareWrapper>
      <Preparing />
    </PrepareWrapper>
  );
};

export default LikePlace;

const PrepareWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
