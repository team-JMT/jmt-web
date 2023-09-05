import React from 'react';

import useGetRestaurantDetailData from '@apis/hooks/restaurant/useGetRestaurantDetailData';
import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import Reason from '@components/report/Reason';
import SearchResultCard from '@components/searchResult/SearchResultCard';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';
//import classNames from 'classnames';

import getUrlValue from '@utils/getUrlValue';

const reportArr = [
  '광고성 게시글이에요.',
  '폭력적인 내용이 포함되어있어요.',
  '성희롱을 당했어요.',
  '존재하지 않는 맛집이에요.',
  '개인정보가 노출되어있어요.',
  '다른 사유에요.',
];
const Report = () => {
  const { pop } = useHomeFlow();
  const detailId = getUrlValue();
  const { DetailData } = useGetRestaurantDetailData(detailId);

  return (
    <AppScreen
      appBar={{
        title: <h1 className={'text-l-medium'}>신고하기</h1>,
        backButton: {
          render: () => (
            <button className={'back-button'} onClick={pop}>
              <LeftArrowIcon />
            </button>
          ),
        },
        height: '48px',
      }}
    >
      <main className={'safe-area-layout-container'}>
        <div className={'report-container'}>
          <p className={'report-text'}>선택된 글</p>
          <SearchResultCard restaurantInfo={DetailData!} />
          <div className={'gray-bar'} />
          <p className={'report-text'}>신고하는 사유를 알려주세요.(필수)</p>
          <div className={'reason-container'}>
            {reportArr.map((item, index) => {
              return <Reason key={index}>{item}</Reason>;
            })}
          </div>
        </div>
      </main>
    </AppScreen>
  );
};

export default Report;
