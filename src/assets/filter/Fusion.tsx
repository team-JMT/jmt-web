import React from 'react';

import { IconColor } from '.';

const Fusion: React.FC<IconColor> = ({ color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_5228_433"
        //style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="30"
        height="30"
      >
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_5228_433)">
        <path
          d="M2.5 23.75V21.25H27.5V23.75H2.5ZM3.75 20V18.75C3.75 16.0833 4.56771 13.7292 6.20312 11.6875C7.83854 9.64583 9.9375 8.35417 12.5 7.8125V7.5C12.5 6.8125 12.7448 6.22396 13.2344 5.73438C13.724 5.24479 14.3125 5 15 5C15.6875 5 16.276 5.24479 16.7656 5.73438C17.2552 6.22396 17.5 6.8125 17.5 7.5V7.8125C20.0833 8.35417 22.1875 9.64583 23.8125 11.6875C25.4375 13.7292 26.25 16.0833 26.25 18.75V20H3.75Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default Fusion;
