import React, { useState } from 'react';

import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

function wrap(min: number, max: number, value: number): number {
  const range = max - min;
  const normalizedValue = (value - min) % range;
  return normalizedValue >= 0 ? normalizedValue + min : normalizedValue + max;
}
/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ImgContainer = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return images.length > 0 ? (
    <ImgWrapper>
      <AnimatePresence initial={false} custom={direction}>
        <PlaceImg
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 40 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <PageButton direction={'right'} onClick={() => paginate(1)} />
      <PageButton direction={'left'} onClick={() => paginate(-1)} />
      <ImgNumber className={'text-s-bold'}>
        {imageIndex + 1}
        <span className="gray"> / {images.length}</span>
      </ImgNumber>
    </ImgWrapper>
  ) : (
    <></>
  );
};

const ImgWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #151515;
`;

const PlaceImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const ImgNumber = styled.div`
  position: absolute;
  right: 11px;
  bottom: 7px;
  color: white;
  z-index: 2;
  .gray {
    /* gray200 */
    color: #d4dade;
    font-size: 12px;
    font-weight: 500;
  }
`;
const PageButton = styled.div<{ direction: string }>`
  position: absolute;
  background: white;
  width: 40px;
  height: 100%;
  z-index: 1;
  opacity: 0;
  ${(props) => props.direction} : 0px;
`;

export default ImgContainer;
