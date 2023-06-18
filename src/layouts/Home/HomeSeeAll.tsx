import React from 'react';

import DownArrow from '@assets/icons/DownArrow';
import Chip from '@commons/Chip';
import FilterChip from '@commons/FilterChip';
import { motion } from 'framer-motion';

const HomeSeeAll = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className={'home-tab-container'}
      key={'ALL'}
    >
      <aside className={'see-all-filter'}>
        <Chip>
          가까운 순
          <DownArrow />
        </Chip>
        <FilterChip>종류</FilterChip>
        <FilterChip>주류 여부</FilterChip>
      </aside>
    </motion.div>
  );
};

export default HomeSeeAll;
