import React from "react";

// https://beta.reactjs.org/learn/responding-to-events#adding-event-handlers

function Button({ status, children, onClick }) {
  return (
    <button className={`button ${status}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
