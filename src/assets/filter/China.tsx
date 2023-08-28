import React from 'react';

import { IconColor } from '.';

const China: React.FC<IconColor> = ({ color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5228_2692)">
        <path
          d="M11.25 7.5H10V5.8125L11.25 5.6625V7.5ZM11.25 15H10V8.75H11.25V15ZM7.5 8.75H8.75V15H7.5V8.75ZM7.5 6.1L8.75 5.95V7.5H7.5V6.1ZM27.5 3.75V2.5L6.25 5V15H2.5C2.5 19.6125 5.5875 23.575 10 25.3125V27.5H20V25.3125C24.4125 23.575 27.5 19.6125 27.5 15H12.5V8.75H27.5V7.5H12.5V5.5125L27.5 3.75Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_5228_2692">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default China;
