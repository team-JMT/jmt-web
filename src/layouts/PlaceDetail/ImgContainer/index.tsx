//https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?file=/src/Example.tsx:1599-2439
import React, { useState } from 'react';

import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

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
const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
interface ImgContainerProps {
  images: string[];
}
const ImgContainer: React.FC<ImgContainerProps> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return images.length >= 2 ? (
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
    <ImgWrapper>
      <PlaceImg src={images[imageIndex]} />
      <ImgNumber className={'text-s-bold'}>
        1<span className="gray"> / {images.length}</span>
      </ImgNumber>
    </ImgWrapper>
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
