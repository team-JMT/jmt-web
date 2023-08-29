import React, { useRef, useState } from 'react';

import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import RemoveIcon from '@assets/icons/RemoveIcon';
import SearchInput from '@commons/input/SearchInput';
import SearchLocationLogCard from '@components/changeLocation/SearchLocationLogCard';
import { fadeInOut } from '@components/motion/fade-in-out';
import { variantKey } from '@components/motion/variantKey';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';
import {
  addLocationSearchLogAtom,
  locationAtom,
  removeLocationSearchLogAtom,
} from '@store/locationAtom';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useAtom, useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';

const ChangeLocation = () => {
  const { pop } = useHomeFlow();
  const [{ locationLog }, setSearchLog] = useAtom(locationAtom);

  const addLocationSearchLog = useSetAtom(addLocationSearchLogAtom);
  const removeLocationSearchLog = useSetAtom(removeLocationSearchLogAtom);
  const [inputValue, setInputValue] = useState<string>();
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (typeof inputValue === 'string') {
      addLocationSearchLog({
        name: inputValue,
      });
      if (searchRef?.current?.value) {
        searchRef.current.value = '';
      }
    }
  };

  const handleRemoveLog = (log: string) => {
    removeLocationSearchLog({
      name: log,
    });
  };

  return (
    <AppScreen
      appBar={{
        title: <h1 className={'text-l-medium'}>위치 변경</h1>,
        backButton: {
          render: () => (
            <button className={'back-button'} onClick={pop}>
              <LeftArrowIcon />
            </button>
          ),
        },
        height: '48px',
      }}
    >
      <main className={'safe-area-layout-container'}>
        <div className={'container-inner'}>
          <div className={'search-input-wrapper'}>
            <SearchInput
              ref={searchRef}
              placeholder={'맛집을 검색해보세요'}
              onChange={(e) => setInputValue(e.target.value)}
              onSearch={handleSearch}
            />
          </div>
          {!isFocus && (
            <motion.div
              className={'search-log-menu'}
              variants={fadeInOut}
              {...variantKey}
            >
              <span className={classNames('text-l-bold', 'gray900')}>
                최근 검색한 위치
              </span>
              <button
                className={classNames('text-m-medium', 'gray400')}
                onClick={() => setSearchLog(RESET)}
              >
                전체삭제
              </button>
            </motion.div>
          )}
        </div>
        {locationLog &&
          locationLog.map((log, index) => (
            <SearchLocationLogCard key={`${log}${index}`}>
              {log.name}
              <RemoveIcon onClick={() => handleRemoveLog(log.name)} />
            </SearchLocationLogCard>
          ))}
      </main>
    </AppScreen>
  );
};

export default ChangeLocation;
