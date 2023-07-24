import React from 'react';

import ExitIcon from '@assets/icons/ExitIcon';
import Chip from '@commons/Chip';
import { fadeInOut } from '@components/motion/fade-in-out';
import { variantKey } from '@components/motion/variantKey';
import { useHomeFlow } from '@stacks/homeStackFlow';
import {
  addSearchLogAtom,
  removeSearchLogAtom,
  SearchLog,
  searchLogAtom,
} from '@store/searchLogAtom';
import { motion } from 'framer-motion';
import { useAtomValue, useSetAtom } from 'jotai';

const SearchLogList = () => {
  const { push } = useHomeFlow();
  const searchLog = useAtomValue(searchLogAtom);
  const addSearchLog = useSetAtom(addSearchLogAtom);
  const removeSearchLog = useSetAtom(removeSearchLogAtom);

  const handleSearch = (currentLog: SearchLog) => {
    push('SearchResult', { keyword: encodeURI(currentLog.name) });
    addSearchLog(currentLog);
  };

  return (
    <motion.section
      className={'search-log-list'}
      variants={fadeInOut}
      {...variantKey}
    >
      <div className={'search-log-list-wrapper'}>
        {searchLog?.map((log, index) => (
          <Chip
            key={`${log}${index}`}
            onClick={(e) => {
              handleSearch(log);
            }}
            className={'search-log-chip'}
          >
            <span className={'text-s-medium'}>{log.name}</span>
            <ExitIcon
              onClick={(e) => {
                e.stopPropagation();
                removeSearchLog(log);
              }}
            />
          </Chip>
        ))}
      </div>
    </motion.section>
  );
};

export default SearchLogList;
