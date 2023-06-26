import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import rightArrowIcon from '@assets/icons/rightArrow.svg';
import shareIcon from '@assets/icons/share.svg';
import threeBotsIcon from '@assets/icons/threeBots.svg';
import verticalBarIcon from '@assets/icons/verticalBar.svg';
import BottomBar from '@layouts/PlaceDetail/BottomBar';
import BottomSheet from '@layouts/PlaceDetail/BottomSheet';
import DetailMenu from '@layouts/PlaceDetail/DetailMenu';
import ImgContainer from '@layouts/PlaceDetail/ImgContainer';
import Modal from '@layouts/PlaceDetail/Modal';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { BOTTOM_SHEET_KEY, toggleBottomSheet } from '@store/bottomSheetAtom';
import { useSetAtom } from 'jotai';
import './PlaceDetail.scss';

const imgArray = ['./img1.png', './img2.png', './img3.png'];

const PlaceDetail = () => {
  const { pop } = useHomeFlow();

  const toggleBS = useSetAtom(toggleBottomSheet);
  const MoreButton = () => (
    <div
      className="more-button"
      onClick={() => toggleBS(BOTTOM_SHEET_KEY.IS_OPEN)}
    >
      <img src={threeBotsIcon} />
    </div>
  );

  return (
    <>
      <BottomSheet />
      <Modal />
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

export default PlaceDetail;
