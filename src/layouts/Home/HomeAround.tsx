import React from 'react';

import { useGetRestaurantDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantDataInfinite';
import SadImage from '@assets/icons/SadImage';
import { motion } from 'framer-motion';

const HomeAround = () => {
  const { restaurantData } = useGetRestaurantDataInfinite({});

  const mappingRestaurantData = React.useMemo(
    () => restaurantData?.flatMap((page) => page.data.restaurant),
    [restaurantData],
  );
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
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
