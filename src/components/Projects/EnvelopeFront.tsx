import React from "react";

export const EnvelopeFront = () => {
  return (
    <svg viewBox="0 0 1124 694" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_115_235)">
        <g filter="url(#filter0_d_115_235)">
          <path
            d="M0 694V0L549.415 269.745C557.195 273.565 566.305 273.567 574.086 269.75L1124 0V694H0Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_115_235"
          x="-12"
          y="-32"
          width="1156"
          height="726"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="-16" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_115_235"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_115_235"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_115_235">
          <rect width="1124" height="694" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
