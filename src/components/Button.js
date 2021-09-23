import React from "react";

/**
 *
 * @param {Function} onClick
 * @param
 */
function Button({onClick, children, customClass}) {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className={`button ${customClass || '' }`}
    >
      <span>{children}</span>
    </div>
  );
}

export default Button;
