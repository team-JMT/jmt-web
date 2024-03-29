import React, { HTMLAttributes } from 'react';

interface ExitIconProps extends HTMLAttributes<HTMLOrSVGElement> {}

const ExitIcon = (props: ExitIconProps) => {
  return (
    <svg
      {...props}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9"
        y="0.5"
        width="12.7279"
        height="12.7279"
        rx="6.36396"
        transform="rotate(45 9 0.5)"
        fill="#D4DADE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.50034 11.0002C6.2242 11.2764 6.2242 11.7241 6.50034 12.0002C6.77648 12.2764 7.2242 12.2764 7.50034 12.0002L9.00005 10.5005L10.4998 12.0003C10.776 12.2764 11.2237 12.2764 11.4998 12.0003C11.776 11.7241 11.776 11.2764 11.4998 11.0003L10.0001 9.50051L11.5003 8.00022C11.7765 7.72407 11.7765 7.27636 11.5003 7.00022C11.2242 6.72407 10.7765 6.72407 10.5003 7.00022L9.00005 8.5005L7.49984 7.00029C7.22369 6.72415 6.77598 6.72415 6.49983 7.00029C6.22369 7.27643 6.22369 7.72415 6.49984 8.00029L8.00005 9.5005L6.50034 11.0002Z"
        fill="url(#paint0_radial_2932_1248)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.50034 11.0002C6.2242 11.2764 6.2242 11.7241 6.50034 12.0002C6.77648 12.2764 7.2242 12.2764 7.50034 12.0002L9.00005 10.5005L10.4998 12.0003C10.776 12.2764 11.2237 12.2764 11.4998 12.0003C11.776 11.7241 11.776 11.2764 11.4998 11.0003L10.0001 9.50051L11.5003 8.00022C11.7765 7.72407 11.7765 7.27636 11.5003 7.00022C11.2242 6.72407 10.7765 6.72407 10.5003 7.00022L9.00005 8.5005L7.49984 7.00029C7.22369 6.72415 6.77598 6.72415 6.49983 7.00029C6.22369 7.27643 6.22369 7.72415 6.49984 8.00029L8.00005 9.5005L6.50034 11.0002Z"
        fill="url(#paint1_linear_2932_1248)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.50034 11.0002C6.2242 11.2764 6.2242 11.7241 6.50034 12.0002C6.77648 12.2764 7.2242 12.2764 7.50034 12.0002L9.00005 10.5005L10.4998 12.0003C10.776 12.2764 11.2237 12.2764 11.4998 12.0003C11.776 11.7241 11.776 11.2764 11.4998 11.0003L10.0001 9.50051L11.5003 8.00022C11.7765 7.72407 11.7765 7.27636 11.5003 7.00022C11.2242 6.72407 10.7765 6.72407 10.5003 7.00022L9.00005 8.5005L7.49984 7.00029C7.22369 6.72415 6.77598 6.72415 6.49983 7.00029C6.22369 7.27643 6.22369 7.72415 6.49984 8.00029L8.00005 9.5005L6.50034 11.0002Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2932_1248"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.58346 8.80555) rotate(104.744) scale(8.1862)"
        >
          <stop stopColor="#20BC2F" />
          <stop offset="1" stopColor="#20BC2F" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_2932_1248"
          x1="11.5001"
          y1="7"
          x2="10.5279"
          y2="7.97222"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ExitIcon;
