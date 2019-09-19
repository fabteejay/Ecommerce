import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignedIn, ...otherprops }) => {
  return (
    <button
      className={`${isGoogleSignedIn ? "google-sign-in" : ""} custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
