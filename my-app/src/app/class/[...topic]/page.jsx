import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>this is catch all segment page(topic)</h1>
      <p>{params.topic}</p>
    </div>
  );
};

export default page;
