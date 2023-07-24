import React from 'react';

import { fadeInOut } from '@components/motion/fade-in-out';
import styled from '@emotion/styled';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { focusedPlaceAtom } from '@store/placesAtom';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';

import { Restaurant } from '../../models/getRestaurantData';

export const Container = styled(motion.div)`
  display: flex;
  position: fixed;
  bottom: 109px;
  width: 100%;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  width: 100%;
  padding: 24px 20px;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px rgba(22, 26, 29, 0.08);
  margin: 0 20px;
`;
export const PlaceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
interface FixedPlaceDetailProps {
  restaurantInfo: Restaurant;
}
const FixedPlaceDetail = () => {
  const { push } = useHomeFlow();
  const [focusedPlace] = useAtom(focusedPlaceAtom);
  return (
    <>
      {focusedPlace && (
        <Container
          variants={fadeInOut}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
        >
          <CardContainer
            onClick={() =>
              push('PlaceDetail', { placeId: String(focusedPlace.id) })
            }
          >
            <PlaceContent>
              <span className={'title-s-medium'}>{focusedPlace.name}</span>
              <span className={classNames('text-l-medium', 'gray500')}>
                {focusedPlace.address}
              </span>
            </PlaceContent>
          </CardContainer>
        </Container>
      )}
    </>
  );
};

export default FixedPlaceDetail;
