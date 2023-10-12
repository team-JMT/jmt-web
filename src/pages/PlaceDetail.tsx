import useGetRestaurantDetailData from '@apis/hooks/restaurant/useGetRestaurantDetailData';
import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import MoreIcon from '@assets/icons/MoreIcon';
import rightArrowIcon from '@assets/icons/rightArrow.svg';
import Share from '@assets/icons/Share';
import verticalBarIcon from '@assets/icons/verticalBar.svg';
import NoticeBox from '@components/placeDetail/NoticeBox';
import BottomBar from '@layouts/PlaceDetail/BottomBar';
import DetailMenu from '@layouts/PlaceDetail/DetailMenu';
import ImgContainer from '@layouts/PlaceDetail/ImgContainer';
import Modal from '@layouts/PlaceDetail/Modal';
import PlaceBottomSheet from '@layouts/PlaceDetail/PlaceDetailMenuBottomSheet';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { openBottomSheet } from '@store/bottomSheetAtom';
import classNames from 'classnames';
import { useSetAtom } from 'jotai';

import '../styles/pages/PlaceDetail.scss';
import calculateDistance from '@utils/calculateDistance';
import distanceConverter from '@utils/distanceConverter';
import { nativeInfo } from '@utils/storage';

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
  if (Boolean(DetailError) || DetailData === undefined) {
    return <div>에러가 났어요 </div>;
  } else {
    const userLocation = nativeInfo.getData().userPosition;
    const location = {
      userPositionX: userLocation.x,
      userPositionY: userLocation.y,
      placeX: DetailData.x,
      placeY: DetailData.y,
    };
    const distance = calculateDistance(location);
    return (
      <>
        <PlaceBottomSheet userId={DetailData.userId} />
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
                <MoreIcon />
              </div>
            ),
            //https://github.com/daangn/stackflow/blob/main/demo/src/activities/Main.tsx
            height: '48px',
          }}
        >
          {DetailData.pictures.length >= 1 ? (
            <ImgContainer images={DetailData.pictures} />
          ) : (
            <></>
          )}
          <div className={'detail-container'}>
            <div
              className={'name-box'}
              onClick={() =>
                push('OtherProfile', { userId: DetailData.userId })
              }
            >
              <a className={'text-m-medium'}>
                {DetailData.userNickName}&nbsp;&nbsp;
              </a>
              <img src={rightArrowIcon} />
            </div>
            <div className={'title-box'}>
              <a className={'title-s-bold'}>{DetailData.name}</a>
              <Share />
            </div>
            <div className={'add-box'}>
              <a className={classNames('text-l-medium', 'gray900')}>
                위치에서 {distanceConverter(distance)}
              </a>
              <img src={verticalBarIcon} />
              <a className={classNames('text-l-medium', 'gray700')}>
                {DetailData.category}
              </a>
            </div>
            <DetailMenu />
          </div>
          <BottomBar name={DetailData.name} x={DetailData.x} y={DetailData.y} />
        </AppScreen>
        <NoticeBox isError={Boolean(DetailError)} content={DetailMessage} />
      </>
    );
  }
};

export default PlaceDetail;
