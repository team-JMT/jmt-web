/* eslint-disable import/order */

//import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { AppScreen } from '@stackflow/plugin-basic-ui';

import leftArrowIcon from '../assets/icons/leftArrow.svg';
import rightArrowIcon from '../assets/icons/rightArrow.svg';
import shareIcon from '../assets/icons/share.svg';
import threeBotsIcon from '../assets/icons/threeBots.svg';
import verticalBarIcon from '../assets/icons/verticalBar.svg';
import BottomBar from '../components/placeDetail/BottomBar';
import DetailMenu from '../components/placeDetail/DetailMenu';
import ImgContainer from '../components/placeDetail/ImgContainer';
import { useHomeFlow } from '../stacks/homeStackFlow';
import './PlaceDetail.scss';

import { modalState } from '@store/modal';
import { useAtom } from 'jotai';
import Modal from '@components/common/Modal';

const imgArray = ['./img1.png', './img2.png', './img3.png'];

const PlaceDetail = () => {
  const { pop } = useHomeFlow();

  const [modal, setModal] = useAtom(modalState);
  const MoreButton = () => (
    <div
      className="more-button"
      onClick={() =>
        setModal({
          ...modal,
          HOME_PLACE_FILTER: !modal.HOME_PLACE_FILTER,
        })
      }
    >
      <img src={threeBotsIcon} />
    </div>
  );
  return (
    <>
      <Modal
        type={'HOME_PLACE_FILTER'}
        content={
          <BottomSheet>
            <BottomSheetButton className={'text-l-medium'}>
              수정하기
            </BottomSheetButton>
            <BottomSheetButton
              onClick={() => onclose}
              className={'text-l-medium'}
            >
              삭제하기
            </BottomSheetButton>
          </BottomSheet>
        }
      />
      <AppScreen
        appBar={{
          title: <h1 className={'text-l-medium'}>맛집 상세</h1>,
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
const BottomSheet = styled(motion.div)`
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
  & + & {
    margin-top: 12px;
  }
`;
export default PlaceDetail;
