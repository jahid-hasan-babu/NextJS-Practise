import React from "react";

function page({ params }) {
  return (
    <div>
      <h1>User information is {params.userid}</h1>
    </div>
  );
}

export default page;

export function generateMetadata() {
  return {
    title: "Welcome to JB Website",
    description: "This is JB Website",
  };
}
