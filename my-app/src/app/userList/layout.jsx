import React from "react";

function layout({ children }) {
  return (
    <div>
      <h1>This is user list component</h1>
      {children}
    </div>
  );
}

export default layout;
