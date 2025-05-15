import React from "react";

export const EnvelopeBack = () => {
  return (
    <svg viewBox="0 0 501 530" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.444336 229.239H500V538H0.444336V229.239Z" fill="#DFDFDF" />
      <g filter="url(#filter0_i_101_2)">
        <path
          d="M269.361 17.3528C258.655 7.53557 242.219 7.53559 231.513 17.3528L0.444356 229.239L500.43 229.239L269.361 17.3528Z"
          fill="white"
        />
        <path
          d="M269.365 52.4419C258.66 42.6281 242.229 42.6282 231.523 52.4419L38.6666 229.239L462.222 229.239L269.365 52.4419Z"
          fill="#DFDFDF"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_101_2"
          x="0.444336"
          y="5.98987"
          width="499.985"
          height="223.249"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="24" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_101_2"
          />
        </filter>
      </defs>
    </svg>
  );
};
