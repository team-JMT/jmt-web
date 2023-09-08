import React from 'react';

import PencilIcon from '@assets/icons/PencilIcon';
import ReportIcon from '@assets/icons/ReportIcon';
import Share from '@assets/icons/Share';
import TrashIcon from '@assets/icons/TrashIcon';
import BottomSheetCompoenet from '@components/common/BottomSheet';
import styled from '@emotion/styled';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { BOTTOM_SHEET_KEY, toggleBottomSheet } from '@store/bottomSheetAtom';
import { MODAL_KEY, toggleModal } from '@store/modalAtom';
import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';

import getUrlValue from '@utils/getUrlValue';

const BottomSheet = () => {
  const useToggleBottomSheet = useSetAtom(toggleBottomSheet);
  const useToggleModal = useSetAtom(toggleModal);
  const { push, pop } = useHomeFlow();

  const detailId = getUrlValue();

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
          <BottomSheetButton className={'text-l-medium'}>
            <PencilIcon />
            수정하기
          </BottomSheetButton>
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
          <BottomSheetButton className={'text-l-medium'}>
            <Share />
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
