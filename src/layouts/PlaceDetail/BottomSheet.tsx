import React from 'react';

import useGetLoginUserInfo from '@apis/hooks/user/useGetLoginUserInfo';
import PencilIcon from '@assets/icons/PencilIcon';
import ReportIcon from '@assets/icons/ReportIcon';
import SmallShare from '@assets/icons/SmallShare';
import TrashIcon from '@assets/icons/TrashIcon';
import BottomSheetCompoenet from '@components/common/BottomSheet';
import styled from '@emotion/styled';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { BOTTOM_SHEET_KEY, toggleBottomSheet } from '@store/bottomSheetAtom';
import { MODAL_KEY, toggleModal } from '@store/modalAtom';
import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';

import { handleNativeShare, navigateNativeRouteType } from '@utils/bridge';
import getUrlValue from '@utils/getUrlValue';

const BottomSheet = ({ userId }: { userId: number }) => {
  const { push, pop } = useHomeFlow();

  const useToggleBottomSheet = useSetAtom(toggleBottomSheet);
  const useToggleModal = useSetAtom(toggleModal);

  const detailId = getUrlValue();
  const params = {
    restaurantId: detailId.toString(),
  };
  const loginUser = useGetLoginUserInfo();

  const isWriter = userId === loginUser.UserData?.id;
  console.log(isWriter);
  return (
    <BottomSheetCompoenet
      type={'PLACE_DETAIL'}
      content={
        <BottomSheetWrapper>
          <BottomSheetButton
            onClick={() => {
              useToggleBottomSheet(BOTTOM_SHEET_KEY.PLACE_DETAIL);
              push('Report', { placeId: detailId });
            }}
            className={'text-l-medium'}
          >
            <ReportIcon />
            신고하기
          </BottomSheetButton>
          {isWriter && (
            <BottomSheetButton
              className={'text-l-medium'}
              onClick={() => {
                useToggleBottomSheet(BOTTOM_SHEET_KEY.PLACE_DETAIL);
                navigateNativeRouteType('editRestaurantInfo', params);
              }}
            >
              <PencilIcon />
              수정하기
            </BottomSheetButton>
          )}
          {isWriter && (
            <BottomSheetButton
              onClick={() => {
                useToggleBottomSheet(BOTTOM_SHEET_KEY.PLACE_DETAIL);
                useToggleModal(MODAL_KEY.DELETE_CHECK);
              }}
              className={'text-l-medium'}
            >
              <TrashIcon />
              삭제하기
            </BottomSheetButton>
          )}
          <BottomSheetButton
            className={'text-l-medium'}
            onClick={() => {
              useToggleBottomSheet(BOTTOM_SHEET_KEY.PLACE_DETAIL);
              handleNativeShare();
            }}
          >
            <SmallShare />
            공유하기
          </BottomSheetButton>
        </BottomSheetWrapper>
      }
    />
  );
};

export default BottomSheet;

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
  gap: 6px;
  & + & {
    margin-top: 12px;
  }
`;
