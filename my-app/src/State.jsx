import React, { useState } from "react";

const State = () => {
  const [value, setValue] = useState(0);
  const add = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <p>Value is Added {value}</p>
      <button onClick={add}>Add value</button>
    </div>
  );
};

export default State;
