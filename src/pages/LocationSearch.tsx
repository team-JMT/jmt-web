import React, { Suspense, useEffect, useRef, useState } from 'react';

import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import RemoveIcon from '@assets/icons/RemoveIcon';
import SearchInput from '@commons/input/SearchInput';
import SearchLocationLogCard from '@components/locationSearch/SearchLocationLogCard';
import { fadeInOut } from '@components/motion/fade-in-out';
import { variantKey } from '@components/motion/variantKey';
import LocationSearchPreview from '@layouts/LocationSearch/LocationSearchPreview';
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

const LocationSearch = () => {
  const { pop, push } = useHomeFlow();
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

  const handleLogClick = (placeName: string) => {
    const encodeName = encodeURI(placeName);
    push('LocationResult', {
      keyword: encodeName,
    });
    addLocationSearchLog({ name: placeName });
  };
  const handleRemoveLog = (log: string) => {
    removeLocationSearchLog({
      name: log,
    });
  };

  useEffect(() => {
    const handleFocus = () => {
      setIsFocus(true);
    };
    const handleBlur = () => {
      setTimeout(() => {
        setIsFocus(false);
      }, 200);
    };
    if (searchRef.current) {
      searchRef.current.addEventListener('focus', handleFocus);
      searchRef.current.addEventListener('blur', handleBlur);
    }
    return () => {
      if (searchRef.current) {
        searchRef.current.removeEventListener('focus', handleFocus);
        searchRef.current.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

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
              placeholder={'지번, 도로명, 건물명 등으로 검색하세요'}
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
        {!isFocus &&
          locationLog &&
          locationLog.map((log, index) => (
            <SearchLocationLogCard
              key={`${log}${index}`}
              onClick={() => handleLogClick(log.name)}
            >
              {log.name}
              <RemoveIcon onClick={() => handleRemoveLog(log.name)} />
            </SearchLocationLogCard>
          ))}
        {isFocus && (
          <Suspense fallback={<div>로딩 중</div>}>
            <LocationSearchPreview inputValue={inputValue} />
          </Suspense>
        )}
      </main>
    </AppScreen>
  );
};

export default LocationSearch;
