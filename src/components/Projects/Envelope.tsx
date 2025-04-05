import React from "react";

export const Envelope = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="85 0 1130 1010"
    >
      <path fill="#fff" d="M87 315h1124v695H87z" />
      <g filter="url(#a)">
        <path
          fill="#fff"
          d="M636 8c8-5 19-5 27 0l455 255c26 14 16 52-13 52H194c-29 0-39-38-13-52L636 8Z"
        />
      </g>
      <path fill="#fff" d="m411 134 324 181H87l324-181Z" />
      <path fill="#fff" d="m888 134 324 181H564l324-181Z" />
      <g filter="url(#b)">
        <g filter="url(#c)">
          <path
            fill="#D9D9D9"
            d="M636 586c8 4 17 4 25 0l442-218c27-13 17-53-12-53H206c-29 0-39 40-12 53l442 218Z"
          />
        </g>
        <path fill="#D9D9D9" d="m411 474 324-159H87l324 159Z" />
        <path fill="#D9D9D9" d="m888 474 324-159H564l324 159Z" />
      </g>
      <defs>
        <filter
          id="a"
          width="998.5"
          height="342.9"
          x="150.3"
          y="4.1"
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_101_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_101_2"
            result="shape"
          />
        </filter>
        <filter
          id="b"
          width="1125"
          height="289.8"
          x="87"
          y="299"
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
          <feBlend in2="shape" result="effect1_innerShadow_101_2" />
        </filter>
        <filter
          id="c"
          width="944.6"
          height="277.8"
          x="178.2"
          y="315"
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
          <feBlend in2="shape" result="effect1_innerShadow_101_2" />
        </filter>
      </defs>
    </svg>
  );
};
