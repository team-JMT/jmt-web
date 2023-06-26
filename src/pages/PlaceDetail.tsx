/* eslint-disable import/order */

//import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import rightArrowIcon from '../assets/icons/rightArrow.svg';
import shareIcon from '../assets/icons/share.svg';
import threeBotsIcon from '../assets/icons/threeBots.svg';
import verticalBarIcon from '../assets/icons/verticalBar.svg';
import PencilIcon from '@assets/icons/PencilIcon';
import TrashIcon from '@assets/icons/TrashIcon';
import BottomBar from '../components/placeDetail/BottomBar';
import DetailMenu from '../components/placeDetail/DetailMenu';
import ImgContainer from '../components/placeDetail/ImgContainer';

import BottomSheet from '../components/common/BottomSheet';
import Modal from '../components/common/Modal';
import { useHomeFlow } from '../stacks/homeStackFlow';
import './PlaceDetail.scss';

import { BOTTOM_SHEET_KEY, toggleBottomSheet } from '@store/bottomSheetAtom';
import { MODAL_KEY, toggleModal } from '@store/modalAtom';
import { useSetAtom } from 'jotai';

const imgArray = ['./img1.png', './img2.png', './img3.png'];

const PlaceDetail = () => {
  const { pop } = useHomeFlow();

  const toggleBS = useSetAtom(toggleBottomSheet);
  const toggleM = useSetAtom(toggleModal);
  const MoreButton = () => (
    <div
      className="more-button"
      onClick={() => toggleBS(BOTTOM_SHEET_KEY.IS_OPEN)}
    >
      <img src={threeBotsIcon} />
    </div>
  );

  const Delete = () => {
    toggleM(MODAL_KEY.IS_OPEN);
    pop();
  };
  return (
    <>
      <BottomSheet
        type={'IS_OPEN'}
        content={
          <BottomSheetWrapper>
            <BottomSheetButton className={'text-l-medium'}>
              <PencilIcon />
              수정하기
            </BottomSheetButton>
            <BottomSheetButton
              onClick={() => {
                toggleBS(BOTTOM_SHEET_KEY.IS_OPEN);
                toggleM(MODAL_KEY.IS_OPEN);
              }}
              className={'text-l-medium'}
            >
              <TrashIcon />
              삭제하기
            </BottomSheetButton>
          </BottomSheetWrapper>
        }
      />
      <Modal
        type={'IS_OPEN'}
        content={
          <>
            <Title className={'title-s-bold'}>맛집을 삭제할까요?</Title>
            <Explain>
              <div className={'text-m-medium'}>
                삭제하면 등록되지 않은 맛집으로 변경돼요.
              </div>
              <div className={'text-m-medium'}>정말 삭제할까요?</div>
            </Explain>
            <ButtonWrapper>
              <ModalButton className={'text-m-medium'} onClick={Delete}>
                삭제하기
              </ModalButton>
              <ModalButton
                className={'text-m-medium'}
                onClick={() => toggleM(MODAL_KEY.IS_OPEN)}
              >
                유지하기
              </ModalButton>
            </ButtonWrapper>
          </>
        }
      />
      <AppScreen
        appBar={{
          title: <h1 className={'text-l-medium'}>맛집 상세</h1>,
          backButton: {
            render: () => (
              <button className={'back-button'} onClick={pop}>
                <LeftArrowIcon />
              </button>
            ),
          },
          appendRight: MoreButton,
          //https://github.com/daangn/stackflow/blob/main/demo/src/activities/Main.tsx
          height: '48px',
        }}
      >
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
    </>
  );
};
const BottomSheetWrapper = styled(motion.div)`
  margin-bottom: 36px;
`;

const BottomSheetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  background: #ffffff;
  /* gray100 */
  border: 2px solid #f1f3f4;
  border-radius: 8px;
  gap: 2px;
  & + & {
    margin-top: 12px;
  }
`;
const Title = styled.div`
  letter-spacing: -0.02em;
  line-height: 150%;
  /* gray900 */
  color: #161a1d;
`;
const Explain = styled.div`
  margin: 12px 0;
  div {
    /* gray600 */
    color: #637782;
    font-weight: 500;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.02em;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;
const ModalButton = styled.button`
  width: 140px;
  height: 48px;
  padding: 0px;
  border: 1px solid #e53900;
  border-radius: 8px;
  background: #ffffff;
  letter-spacing: -0.02em;
  /* main600 */
  color: #e53900;
  & + & {
    /* main500 */
    background: #ff531a;
    color: #ffffff;
  }
`;
export default PlaceDetail;
