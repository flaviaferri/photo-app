import React from "react";

function Search(props) {
  return (
    <svg
      width={27}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={11.136}
        cy={11.136}
        r={9.136}
        stroke="#1B3CEA"
        strokeWidth={4}
      />
      <path
        d="M18.56 18.56l5.94 5.94"
        stroke="#1B3CEA"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Search;
