import React, { useEffect } from 'react';

import { useGetRestaurantDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantDataInfinite';
import SadImage from '@assets/icons/SadImage';
import SearchResultCard from '@components/SearchResult/SearchResultCard';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { setPlacesAtom } from '@store/placesAtom';
import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai/index';

const HomeAround = () => {
  const { push } = useHomeFlow();
  const setPlaces = useSetAtom(setPlacesAtom);
  const { restaurantData } = useGetRestaurantDataInfinite({
    page: 0,
    size: 10,
  });

  const mappingRestaurantData = React.useMemo(
    () => restaurantData?.flatMap((page) => page.data.restaurants),
    [restaurantData],
  );

  useEffect(() => {
    if (!mappingRestaurantData) {
      return;
    }
    setPlaces(mappingRestaurantData);
  }, [mappingRestaurantData]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 30, transition: { duration: 0.5 } }}
      className={'home-tab-container'}
      key={'AROUND'}
    >
      {mappingRestaurantData &&
        mappingRestaurantData.map((data) => (
          <SearchResultCard
            key={data.id}
            restaurantInfo={data}
            onClick={() => push('PlaceDetail', { placeId: String(data.id) })}
          />
        ))}
      <SadImage />
    </motion.div>
  );
};

export default HomeAround;
