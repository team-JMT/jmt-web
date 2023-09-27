import React, { useState } from 'react';

import useGetRestaurantDetailData from '@apis/hooks/restaurant/useGetRestaurantDetailData';
import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import Reason from '@components/report/Reason';
import ReportPlace from '@components/report/ReportPlace';
import BackModal from '@layouts/Report/BackModal';
import NeedToCheck from '@layouts/Report/NeedToCheck';
import ReportModal from '@layouts/Report/ReportModal';
import { AppScreen } from '@stackflow/plugin-basic-ui';
//import { useActivity } from '@stackflow/react';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { MODAL_KEY, toggleModal } from '@store/modalAtom';
import classNames from 'classnames';
import { useSetAtom } from 'jotai';

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
  const [report, setReport] = useState('');
  const [otherReason, setOtherReason] = useState('');

  const useToggleModal = useSetAtom(toggleModal);

  const goToBack = () => {
    if (report === '') {
      pop();
    } else {
      useToggleModal(MODAL_KEY.BACK_CHECK);
    }
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 200) {
      // 최대 길이를 100으로 제한
      setOtherReason(newValue);
    }
  };

  // const activity = useActivity();
  // if (activity.transitionState === 'exit-active') {
  //   activity.transitionState = 'enter-active';
  //   goToBack();
  //   console.log('어떻게');
  // }

  return (
    <>
      <AppScreen
        appBar={{
          title: <h1 className={'text-l-medium'}>신고하기</h1>,
          backButton: {
            render: () => (
              <button className={'back-button'} onClick={() => goToBack()}>
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
            <ReportPlace restaurantInfo={DetailData!} />
            <div className={'gray-bar'} />
            <p className={'report-text'}>신고하는 사유를 알려주세요.(필수)</p>
            <div className={'reason-container'}>
              {reportArr.map((item, index) => {
                return (
                  <div key={index} onClick={() => setReport(item)}>
                    <Reason isActive={report === item}>{item}</Reason>
                  </div>
                );
              })}
              <div className="text-input">
                <textarea
                  className={classNames('text-m-medium', 'other-reason')}
                  value={otherReason}
                  maxLength={200}
                  placeholder="신고하는 사유를 작성해주세요.(필수)"
                  onChange={handleTextareaChange}
                  disabled={report !== '다른 사유에요.'}
                />
                <span className={classNames('text-s-medium', 'gray300')}>
                  /200
                </span>
                <span className={classNames('text-s-medium', 'gray600')}>
                  {otherReason.length}
                </span>
              </div>
            </div>
          </div>
          <div className={classNames('text-s-medium', 'report-explain')}>
            [해당 글을 신고하는 경우] <br />
            1. 이런 일이 일어날 수 있습니다. <br />
            2. 진행은 이런 식으로 됩니다. <br />
            3. 신고는 익명으로 처리됩니다.
          </div>
          <div className={'report-subject'}>
            <button
              className={classNames('title-s-medium', 'white')}
              disabled={report === ''}
              onClick={() => {
                if (report === '') {
                  useToggleModal(MODAL_KEY.NEED_TO_CHECK);
                } else {
                  useToggleModal(MODAL_KEY.REPORT_CHECK);
                }
              }}
            >
              제출하기
            </button>
          </div>
        </main>
      </AppScreen>
      <BackModal />
      <ReportModal />
      <NeedToCheck />
    </>
  );
};

export default Report;
