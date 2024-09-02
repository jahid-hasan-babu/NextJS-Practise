import React from "react";

function page({ params }) {
  return (
    <div>
      <h1>User information is {params.userid}</h1>
    </div>
  );
}

export default page;
