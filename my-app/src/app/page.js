"use client";
import State from "@/State";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  //function
  const fun = () => {
    alert("Hello Jahid hasan");
  };
  return (
    <main>
      <h1></h1>
      <button type="button" onClick={fun} className="btn">
        Click{" "}
      </button>
      <State />
      {/* useRouter hook route  */}
      <button type="button" onClick={() => router.push("/userList")}>
        Class page
      </button>
    </main>
  );
}
