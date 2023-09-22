import React from 'react';

import ModalComponent from '@components/common/Modal';
import {
  Title,
  Explain,
  ButtonWrapper,
  ModalButton,
} from '@components/common/Modal/styled';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { MODAL_KEY, closeModal } from '@store/modalAtom';
import { useSetAtom } from 'jotai';

interface Props {
  restaurantId: number;
  reportReason: string;
}

const ReportModal = () => {
  const useCloseModal = useSetAtom(closeModal);
  const { pop } = useHomeFlow();

  return (
    <ModalComponent
      type={'REPORT_CHECK'}
      content={
        <>
          <Title className={'title-s-bold'}>신고를 제출할까요?</Title>
          <Explain>
            <div className={'text-m-medium'}>신고는 익명으로 처리되며</div>
            <div className={'text-m-medium'}>
              해당 사용자의 활동이 제한될 수 있어요.
            </div>
          </Explain>
          <ButtonWrapper>
            <ModalButton
              className={'text-m-medium'}
              onClick={() => useCloseModal(MODAL_KEY.REPORT_CHECK)}
            >
              취소하기
            </ModalButton>
            <ModalButton
              className={'text-m-medium'}
              onClick={() => {
                pop();
                useCloseModal(MODAL_KEY.REPORT_CHECK);
              }}
            >
              제출하기
            </ModalButton>
          </ButtonWrapper>
        </>
      }
    />
  );
};

export default ReportModal;
