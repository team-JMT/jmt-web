import useGetRestaurantDetailData from '@apis/hooks/restaurant/useGetRestaurantDetailData';
import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import rightArrowIcon from '@assets/icons/rightArrow.svg';
import shareIcon from '@assets/icons/share.svg';
import ThreeDotsIcon from '@assets/icons/ThreeDots';
import verticalBarIcon from '@assets/icons/verticalBar.svg';
import NoticeBox from '@components/placeDetail/NoticeBox';
import BottomBar from '@layouts/PlaceDetail/BottomBar';
import BottomSheet from '@layouts/PlaceDetail/BottomSheet';
import DetailMenu from '@layouts/PlaceDetail/DetailMenu';
import ImgContainer from '@layouts/PlaceDetail/ImgContainer';
import Modal from '@layouts/PlaceDetail/Modal';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { openBottomSheet } from '@store/bottomSheetAtom';
import classNames from 'classnames';
import { useSetAtom } from 'jotai';

import '../styles/pages/PlaceDetail.scss';

interface PlaceDetailProps {
  params: {
    placeId: string;
  };
}

const PlaceDetail = ({ params }: PlaceDetailProps) => {
  const { push, pop } = useHomeFlow();

  const openBS = useSetAtom(openBottomSheet);

  const { DetailData, DetailMessage, DetailError, isLoading } =
    useGetRestaurantDetailData(Number(params.placeId));

  // 에러가 발생한 경우
  if (Boolean(DetailError)) {
    return <div>에러가 났어요 </div>;
  } else {
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
            appendRight: () => (
              <div
                className="more-button"
                onClick={() => openBS('PLACE_DETAIL')}
              >
                <ThreeDotsIcon />
              </div>
            ),
            //https://github.com/daangn/stackflow/blob/main/demo/src/activities/Main.tsx
            height: '48px',
          }}
        >
          <main className={'safe-area-layout-container'}>
            <ImgContainer images={DetailData?.pictures || []} />
            {/* 이미지 배열의 길이가 0일 경우 imgContainer는 나타나지 않게 하기*/}
            <div className={'detail-container'}>
              <div
                className={'name-box'}
                onClick={() => push('OtherProfile', { userName: 'hungry' })}
              >
                <a className={'text-m-medium'}>유저이름&nbsp;&nbsp;</a>
                <img src={rightArrowIcon} />
              </div>
              <div className={'title-box'}>
                <a className={'title-s-bold'}>{DetailData?.name}</a>
                <img src={shareIcon} />
              </div>
              <div className={'add-box'}>
                <a className={classNames('text-l-medium', 'gray900')}>
                  위치에서 2020m
                </a>
                <img src={verticalBarIcon} />
                <a className={classNames('text-l-medium', 'gray700')}>
                  {DetailData?.category}
                </a>
              </div>
              <DetailMenu />
            </div>
          </main>
          <BottomBar />
        </AppScreen>
        <NoticeBox isError={Boolean(DetailError)} content={DetailMessage} />
      </>
    );
  }
};

export default PlaceDetail;
