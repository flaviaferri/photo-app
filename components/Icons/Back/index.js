import React from "react";

function Back(props) {
  return (
    <svg
      width={25}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 9.5H2m0 0L10.364 1M2 9.5l8.364 8.5"
        stroke="#fff"
        strokeWidth={2}
      />
    </svg>
  );
}

export default Back;
