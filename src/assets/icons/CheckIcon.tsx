import React from 'react';

interface Prop {
  check: boolean;
}
const CheckIcon = ({ check }: Prop) => {
  if (check) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" rx="4" fill="#FF531A" />
        <path
          d="M7.84753 11.8682L14.1973 4.98769C14.3946 4.77389 14.6457 4.66699 14.9507 4.66699C15.2556 4.66699 15.5067 4.77389 15.704 4.98769C15.9013 5.20149 16 5.4736 16 5.80402C16 6.13444 15.9013 6.40655 15.704 6.62035L8.6009 14.3171C8.38565 14.5504 8.13453 14.667 7.84753 14.667C7.56054 14.667 7.30942 14.5504 7.09417 14.3171L4.29596 11.2851C4.09865 11.0713 4 10.7992 4 10.4687C4 10.1383 4.09865 9.86621 4.29596 9.65241C4.49327 9.43861 4.74439 9.33172 5.04933 9.33172C5.35426 9.33172 5.60538 9.43861 5.80269 9.65241L7.84753 11.8682Z"
          fill="white"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="18"
          height="18"
          rx="3"
          stroke="#B7C1C8"
          strokeWidth="2"
        />
      </svg>
    );
  }
};

export default CheckIcon;
