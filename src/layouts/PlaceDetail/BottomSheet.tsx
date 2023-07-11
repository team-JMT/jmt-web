import React from 'react';

import PencilIcon from '@assets/icons/PencilIcon';
import TrashIcon from '@assets/icons/TrashIcon';
import BottomSheetCompoenet from '@components/common/BottomSheet';
import styled from '@emotion/styled';
import { BOTTOM_SHEET_KEY, toggleBottomSheet } from '@store/bottomSheetAtom';
import { MODAL_KEY, toggleModal } from '@store/modalAtom';
import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';

const BottomSheet = () => {
  const toggleBS = useSetAtom(toggleBottomSheet);
  const toggleM = useSetAtom(toggleModal);
  return (
    <BottomSheetCompoenet
      type={'PLACE_DETAIL'}
      content={
        <BottomSheetWrapper>
          <BottomSheetButton className={'text-l-medium'}>
            <PencilIcon />
            수정하기
          </BottomSheetButton>
          <BottomSheetButton
            onClick={() => {
              toggleBS(BOTTOM_SHEET_KEY.PLACE_DETAIL);
              toggleM(MODAL_KEY.DELETE_CHECK);
            }}
            className={'text-l-medium'}
          >
            <TrashIcon />
            삭제하기
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
  gap: 2px;
  & + & {
    margin-top: 12px;
  }
`;
