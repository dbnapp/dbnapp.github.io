import React from "react";

export const Envelope = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 430 334">
      <path fill="#fff" d="M28.7549 104.168h371.499V334H28.7549z" />
      <g filter="url(#a)">
        <path
          fill="#fff"
          d="M200.983 7.669c8.502-4.7642 18.871-4.7642 27.373 0l78.657 44.0725c25.158 14.0965 15.151 52.4265-13.687 52.4265H136.013c-28.838 0-38.8446-38.33-13.687-52.4265L200.983 7.669Z"
        />
      </g>
      <path
        fill="#fff"
        d="m135.847 44.3129 107.087 59.8551H28.7603L135.847 44.3129Z"
      />
      <path
        fill="#fff"
        d="m293.497 44.3129 107.087 59.8551H186.41l107.087-59.8551Z"
      />
      <g filter="url(#b)">
        <g filter="url(#c)">
          <path
            fill="#D9D9D9"
            d="M201.964 189.673c7.802 3.844 16.948 3.844 24.75 0l65.734-32.388c26.584-13.098 17.26-53.117-12.375-53.117H148.605c-29.635 0-38.959 40.019-12.375 53.117l65.734 32.388Z"
          />
        </g>
        <path
          fill="#D9D9D9"
          d="m135.845 156.749 107.087-52.581H28.7578l107.0872 52.581Z"
        />
        <path
          fill="#D9D9D9"
          d="m293.5 156.749 107.087-52.581H186.413L293.5 156.749Z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="245.405"
          height="132.072"
          x="91.9673"
          y="4.0958"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_102_33"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_102_33"
            result="shape"
          />
        </filter>
        <filter
          id="b"
          width="371.829"
          height="104.388"
          x="28.7578"
          y="88.1683"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-16" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_102_33" />
        </filter>
        <filter
          id="c"
          width="191.551"
          height="92.3878"
          x="120.563"
          y="104.168"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_102_33" />
        </filter>
      </defs>
    </svg>
  );
};
