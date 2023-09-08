import React, { Suspense } from 'react';

import { useSearchRestaurantByUser } from '@apis/hooks/restaurant/useSearchRestaurantByUser';
import useGetUserInfo from '@apis/hooks/user/useGetUserInfo';
import DownArrow from '@assets/icons/DownArrow';
import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import Chip from '@commons/Chip';
import FilterChip from '@commons/FilterChip';
import DrinkCategoryFilter from '@components/common/FilterBottomSheet/DrinkCategoryFilter';
import FoodCategoryFilter from '@components/common/FilterBottomSheet/FoodCategoryFilter';
import SortBy from '@components/common/FilterBottomSheet/SortBy';
import Tab from '@components/common/Tab/Tab';
import LikePlace from '@layouts/OtherProfile/LikePlace';
import PostPlace from '@layouts/OtherProfile/PostPlace';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { openBottomSheet } from '@store/bottomSheetAtom';
import {
  SortKey,
  drinkCategoryState,
  foodCategoryState,
  sortByState,
} from '@store/filterAtom';
import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';
import { useAtom, useSetAtom } from 'jotai';

interface OtherProfileProps {
  params: {
    userId: number;
  };
}
const OtherProfile = ({ params }: OtherProfileProps) => {
  const { pop } = useHomeFlow();
  const [tab, setTab] = React.useState('POST');

  const { UserData } = useGetUserInfo(params.userId);
  const Id = params.userId.toString();

  const [foodState] = useAtom(foodCategoryState);
  const [drinkState] = useAtom(drinkCategoryState);
  const [sortState] = useAtom(sortByState);

  const { restaurantData, fetchNextPage, isFetchingNextPage, isEmpty } =
    useSearchRestaurantByUser({
      userId: Id,
      userLocation: {
        x: '127.0596',
        y: '37.6633',
      },
      filter: {
        categoryFilter: '',
      },
      params: {
        page: 0,
        size: 10,
      },
    });

  const totalElement = () => {
    if (!restaurantData) {
      return null;
    }

    return restaurantData[0].data.page.totalElements;
  };

  const handleOpenBottomSheet = useSetAtom(openBottomSheet);

  if (UserData === undefined) {
    return <>오류!</>;
  } else {
    return (
      <AppScreen
        appBar={{
          title: <h1 className={'text-l-medium'}></h1>,
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
          <div className={'other-profile-container'}>
            <div className={'user-info-container'}>
              <img className={'user-image'} src={UserData.profileImg} />
              <div className={'user-info'}>
                <a className={classNames('title-s-bold', 'gray900')}>
                  {UserData.nickname}
                </a>
                <div className={'post'}>
                  <p className={classNames('text-l-medium', 'gray500')}>
                    등록한 맛집
                  </p>
                  <p className={classNames('text-l-medium', 'gray900')}>
                    {totalElement()}
                  </p>
                </div>
              </div>
            </div>
            <Tab.Root defaultId={tab} setState={setTab}>
              <Tab id={'POST'} color={'gray900'}>
                등록한 맛집
              </Tab>
              <Tab id={'LIKE'} color={'gray900'}>
                좋아한 맛집
              </Tab>
            </Tab.Root>
            <br />
            <aside className={'see-all-filter'}>
              <Chip onClick={() => handleOpenBottomSheet('SORT_BY')}>
                {SortKey[sortState]}
                <DownArrow />
              </Chip>
              <div className={classNames('filter-divider', 'gray200')} />
              <FilterChip
                active={foodState !== ''}
                onClick={() => handleOpenBottomSheet('FOOD_CATEGORY')}
              >
                종류
              </FilterChip>
              <FilterChip
                active={drinkState !== ''}
                onClick={() => handleOpenBottomSheet('DRINK_CATEGORY')}
              >
                주류 여부
              </FilterChip>
            </aside>
            <AnimatePresence mode="sync">
              <Suspense fallback={<></>}>
                {tab === 'POST' ? (
                  <PostPlace userId={params.userId} />
                ) : (
                  <LikePlace />
                )}
              </Suspense>
            </AnimatePresence>
          </div>
        </main>
        <SortBy />
        <FoodCategoryFilter />
        <DrinkCategoryFilter />
      </AppScreen>
    );
  }
};

export default OtherProfile;
