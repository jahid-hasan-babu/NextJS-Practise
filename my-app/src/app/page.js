"use client";
import State from "@/State";

export default function Home() {
  //function
  const fun = () => {
    alert("Hello Jahid hasan");
  };
  return (
    <main>
      <h1></h1>
      <button onClick={fun}>Click </button>
      <State />
    </main>
  );
}
