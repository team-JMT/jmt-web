import React from 'react';

import { colors } from '@styles/theme/color';

interface Props {
  active?: boolean;
}
const DownArrow = ({ active = false }: Props) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3L5 7L9 3"
        stroke={active ? colors.main400 : '#B7C1C8'}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default DownArrow;
