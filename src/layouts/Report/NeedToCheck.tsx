import React from 'react';

import ModalComponent from '@components/common/Modal';
import { Title, Explain } from '@components/common/Modal/styled';
import { MODAL_KEY, closeModal } from '@store/modalAtom';
import { useSetAtom } from 'jotai';

const NeedToCheck = () => {
  const useCloseModal = useSetAtom(closeModal);
  return (
    <ModalComponent
      type={'NEED_TO_CHECK'}
      content={
        <>
          <button onClick={() => useCloseModal(MODAL_KEY.NEED_TO_CHECK)}>
            닫는버튼
          </button>
          <Title className={'title-s-bold'}>필수 항목을 입력해주세요</Title>
          <Explain>
            <div className={'text-m-medium'}>(필수)항목을 입력해야</div>
            <div className={'text-m-medium'}>신고를 진행할 수 있어요</div>
          </Explain>
        </>
      }
    />
  );
};

export default NeedToCheck;
