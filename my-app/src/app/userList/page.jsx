import React from "react";

const page = () => {
  return (
    <div>
      <h2>This is user list page</h2>
      <li>user1</li>
      <li>user2</li>
      <li>user3</li>
      <li>user4</li>
      <li>user5</li>
      <li>user6</li>
    </div>
  );
};

export default page;

export function generateMetadata() {
  return {
    title: "Welcome to JB Website",
    description: "This is JB Website",
  };
}
