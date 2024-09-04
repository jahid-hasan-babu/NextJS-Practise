"use client";
import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const placeOrder = () => {
    alert("order confirm");
    router.push("/");
  };
  return (
    <div>
      <h1>Product page</h1>
      <li>Buy Iphone</li>
      <button
        type="button"
        className="btn border p-3 bg-green-400 rounded-md"
        onClick={placeOrder}
      >
        Confirm order
      </button>
    </div>
  );
}

export default page;
