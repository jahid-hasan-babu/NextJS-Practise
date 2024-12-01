/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-lime-500 sticky top-0 z-50 shadow mb-10">
      <div className="flex py-5 items-center justify-between w-11/12 mx-auto">
        {/* Logo Section */}
        <div className="flex-1">
          <Link href="/" className="text-3xl md:text-4xl font-bold text-black">
            SCRUD
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-4 text-white font-bold">
            <li
              className={`rounded-lg px-5 py-3 ${
                isActive("/") ? "bg-black" : "bg-gray-700"
              }`}
            >
              <Link href="/" className="md:text-2xl sm:text-lg">
                List
              </Link>
            </li>
            <li
              className={`rounded-lg px-5 py-3 ${
                isActive("/register") ? "bg-black" : "bg-gray-700"
              }`}
            >
              <Link href="/register" className="md:text-2xl sm:text-lg">
                Registration
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
