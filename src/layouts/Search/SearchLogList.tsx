import React from 'react';

import ExitIcon from '@assets/icons/ExitIcon';
import Chip from '@commons/Chip';
import { useHomeFlow } from '@stacks/homeStackFlow';
import {
  addSearchLogAtom,
  removeSearchLogAtom,
  SearchLog,
  searchLogAtom,
} from '@store/searchLogAtom';
import { useAtomValue, useSetAtom } from 'jotai';

const SearchLogList = () => {
  const { push } = useHomeFlow();
  const searchLog = useAtomValue(searchLogAtom);
  const addSearchLog = useSetAtom(addSearchLogAtom);
  const removeSearchLog = useSetAtom(removeSearchLogAtom);

  const handleSearch = (currentLog: SearchLog) => {
    push('SearchResult', { keyword: currentLog.id });
    addSearchLog(currentLog);
  };

  return (
    <section className={'search-log-list'}>
      <div className={'search-log-list-wrapper'}>
        {searchLog.map((log, index) => (
          <Chip
            key={`${log}${index}`}
            onClick={() => handleSearch(log)}
            className={'search-log-chip'}
          >
            {log.name}
            <ExitIcon onClick={() => removeSearchLog(log)} />
          </Chip>
        ))}
      </div>
    </section>
  );
};

export default SearchLogList;
