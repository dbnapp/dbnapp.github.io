import React from "react";

export const Envelope = () => {
  return (
    <svg
      viewBox="85 0 1130 1010"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="87" y="315" width="1124" height="695" fill="white" />
      <g filter="url(#filter0_d_101_2)">
        <path
          d="M635.819 7.66172C644.319 2.90172 654.682 2.90169 663.181 7.6617L1118.36 262.57C1143.53 276.662 1133.52 315 1104.68 315H194.32C165.478 315 155.475 276.662 180.639 262.57L635.819 7.66172Z"
          fill="white"
        />
      </g>
      <path d="M411.017 134L735.017 315H87.0166L411.017 134Z" fill="white" />
      <path d="M888 134L1212 315H564L888 134Z" fill="white" />
      <g filter="url(#filter1_i_101_2)">
        <g filter="url(#filter2_i_101_2)">
          <path
            d="M636.13 585.909C643.93 589.749 653.071 589.749 660.87 585.909L1103.13 368.119C1129.72 355.026 1120.4 315 1090.76 315H206.239C176.6 315 167.28 355.026 193.869 368.119L636.13 585.909Z"
            fill="#D9D9D9"
          />
        </g>
        <path
          d="M411.008 474L735.008 315H87.0083L411.008 474Z"
          fill="#D9D9D9"
        />
        <path
          d="M888.008 474L1212.01 315H564.008L888.008 474Z"
          fill="#D9D9D9"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_101_2"
          x="150.274"
          y="4.09167"
          width="998.452"
          height="342.908"
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
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_101_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_101_2"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_101_2"
          x="87.0083"
          y="299"
          width="1125"
          height="289.789"
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
          <feOffset dy="-16" />
          <feGaussianBlur stdDeviation="8" />
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
        <filter
          id="filter2_i_101_2"
          x="178.197"
          y="315"
          width="944.605"
          height="277.789"
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
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="2" />
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
