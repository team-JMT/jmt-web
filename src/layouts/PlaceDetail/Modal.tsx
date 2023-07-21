import React from 'react';

import ModalComponent from '@components/common/Modal';
import styled from '@emotion/styled';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { MODAL_KEY, toggleModal } from '@store/modalAtom';
import { colors } from '@styles/theme/color';
import { useSetAtom } from 'jotai';

const Modal = () => {
  const { pop } = useHomeFlow();
  const toggleM = useSetAtom(toggleModal);
  const Delete = () => {
    toggleM(MODAL_KEY.DELETE_CHECK);
    pop();
  };
  return (
    <ModalComponent
      type={'DELETE_CHECK'}
      content={
        <>
          <Title className={'title-s-bold'}>맛집을 삭제할까요?</Title>
          <Explain>
            <div className={'text-m-medium'}>
              삭제하면 등록되지 않은 맛집으로 변경돼요.
            </div>
            <div className={'text-m-medium'}>정말 삭제할까요?</div>
          </Explain>
          <ButtonWrapper>
            <ModalButton className={'text-m-medium'} onClick={Delete}>
              삭제하기
            </ModalButton>
            <ModalButton
              className={'text-m-medium'}
              onClick={() => toggleM(MODAL_KEY.DELETE_CHECK)}
            >
              유지하기
            </ModalButton>
          </ButtonWrapper>
        </>
      }
    />
  );
};

export default Modal;

const Title = styled.div`
  letter-spacing: -0.02em;
  line-height: 150%;
  color: ${colors.gray900};
`;
const Explain = styled.div`
  margin: 12px 0;
  div {
    color: ${colors.gray600};
    font-weight: 500;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.02em;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;
const ModalButton = styled.button`
  width: 140px;
  height: 48px;
  padding: 0px;
  border: 1px solid ${colors.main600};
  border-radius: 8px;
  letter-spacing: -0.02em;
  background: ${colors.white};
  color: ${colors.main600};
  & + & {
    background: ${colors.main500};
    color: ${colors.white};
  }
`;
