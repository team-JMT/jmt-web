import React from 'react';

import { useGetRestaurantDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantDataInfinite';
import SadImage from '@assets/icons/SadImage';
import { motion } from 'framer-motion';

const HomeAround = () => {
  const { restaurantData } = useGetRestaurantDataInfinite({
    page: 0,
    size: 10,
  });

  const mappingRestaurantData = React.useMemo(
    () => restaurantData?.flatMap((page) => page.data.restaurants),
    [restaurantData],
  );
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 30, transition: { duration: 0.5 } }}
      className={'home-tab-container'}
      key={'AROUND'}
    >
      {mappingRestaurantData &&
        mappingRestaurantData.map((data) => <div>{data.name}</div>)}
      <SadImage />
    </motion.div>
  );
};

export default HomeAround;
