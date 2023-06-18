import React from 'react';

import SadImage from '@assets/icons/SadImage';
import { motion } from 'framer-motion';

const HomeAround = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className={'home-tab-container'}
      key={'AROUND'}
    >
      <SadImage />
    </motion.div>
  );
};

export default HomeAround;
