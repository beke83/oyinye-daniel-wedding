import React from "react";
import './checkbox.css'

const CheckBox = ({ choice, setter, index }) => {
  return (
    <span className="check" onClick={() => setter(!choice, index)}>
      {choice ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="16" height="16" rx="4" fill="#718096" />
          <rect
            x="1"
            y="1"
            width="16"
            height="16"
            rx="4"
            stroke="#718096"
            strokeWidth="1"
          />
          <path
            d="M14 6L8 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 9L8 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="16"
            height="16"
            rx="4"
            stroke="#718096"
            strokeWidth="1"
          />
        </svg>
      )}
    </span>
  );
};

export default CheckBox;
