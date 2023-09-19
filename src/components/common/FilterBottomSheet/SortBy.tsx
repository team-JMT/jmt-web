import React from 'react';

import BottomSheetCompoenet from '@components/common/BottomSheet';
import { bottomSheetState, closeBottomSheet } from '@store/bottomSheetAtom';
import { SortCheck, SortKey, sortByState } from '@store/filterAtom';
import { useAtom, useSetAtom } from 'jotai';

import { FilterBox, FilterContainer } from './styled';

const SortBy = () => {
  const [bottomSheet] = useAtom(bottomSheetState);
  const [, setSortState] = useAtom(sortByState);
  const closeBS = useSetAtom(closeBottomSheet);

  return (
    <BottomSheetCompoenet
      type={'SORT_BY'}
      content={
        <FilterContainer>
          {Object.keys(SortKey).map((item: string) => {
            const value = SortKey[item as keyof typeof SortKey];
            return (
              <FilterBox
                key={item}
                active={false}
                className={'title-s-medium'}
                onClick={() => {
                  setSortState(item as SortCheck);
                  closeBS('SORT_BY');
                }}
              >
                {value}
              </FilterBox>
            );
          })}
          <br />
        </FilterContainer>
      }
    ></BottomSheetCompoenet>
  );
};

export default SortBy;
