import React from 'react';

import ModalComponent from '@components/common/Modal';
import styled from '@emotion/styled';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { MODAL_KEY, toggleModal } from '@store/modalAtom';
//import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';

const Modal = () => {
  const { pop } = useHomeFlow();
  const toggleM = useSetAtom(toggleModal);
  const Delete = () => {
    toggleM(MODAL_KEY.IS_OPEN);
    pop();
  };
  return (
    <ModalComponent
      type={'IS_OPEN'}
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
              onClick={() => toggleM(MODAL_KEY.IS_OPEN)}
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
  /* gray900 */
  color: #161a1d;
`;
const Explain = styled.div`
  margin: 12px 0;
  div {
    /* gray600 */
    color: #637782;
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
  border: 1px solid #e53900;
  border-radius: 8px;
  background: #ffffff;
  letter-spacing: -0.02em;
  /* main600 */
  color: #e53900;
  & + & {
    /* main500 */
    background: #ff531a;
    color: #ffffff;
  }
`;
