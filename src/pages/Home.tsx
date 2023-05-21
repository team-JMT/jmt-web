import React from 'react';

import Modal from '@commons/Modal';
import NaverMap from '@components/common/NaverMap';
import HomeBottomSheet from '@components/home/BottomSheet';
import BottomSheetHeader from '@components/home/BottomSheetHeader';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import '../styles/bottomSheet.css';
import { modalState } from '@store/modal';
import { useAtom } from 'jotai';

const Home = () => {
  const [modal, setModal] = useAtom(modalState);

  return (
    <>
      <Modal type={'HOME_PLACE_FILTER'} title="지역">
        <Modal.List>asdassd</Modal.List>
      </Modal>
      <AppScreen>
        <NaverMap />

        <HomeBottomSheet>
          <div className={'container-inner'}>
            <BottomSheetHeader />
            <button
              onClick={() =>
                setModal({
                  ...modal,
                  HOME_PLACE_FILTER: !modal.HOME_PLACE_FILTER,
                })
              }
            >
              open
            </button>
          </div>
        </HomeBottomSheet>
      </AppScreen>
    </>
  );
};

export default Home;
