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

const BackModal = () => {
  const useCloseModal = useSetAtom(closeModal);
  const { pop } = useHomeFlow();

  return (
    <ModalComponent
      type={'BACK_CHECK'}
      content={
        <>
          <Title className={'title-s-bold'}>작성하신 정보가 사라져요.</Title>
          <Explain>
            <div className={'text-m-medium'}>
              뒤로가면 작성하신 정보가 모두 사라져요.
            </div>
            <div className={'text-m-medium'}>계속 작성할까요?</div>
          </Explain>
          <ButtonWrapper>
            <ModalButton
              className={'text-m-medium'}
              onClick={() => {
                pop();
                useCloseModal(MODAL_KEY.BACK_CHECK);
              }}
            >
              나가기
            </ModalButton>
            <ModalButton
              className={'text-m-medium'}
              onClick={() => useCloseModal(MODAL_KEY.BACK_CHECK)}
            >
              계속 작성하기
            </ModalButton>
          </ButtonWrapper>
        </>
      }
    />
  );
};

export default BackModal;
