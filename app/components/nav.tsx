"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavLinks from "./navLinks";

import { BiArrowBack, BiHomeAlt2 } from "react-icons/bi";

export const linkStyle =
  "duration-200 text-zinc-600 hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300";

export default function Nav() {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center h-20 max-w-7xl mx-auto px-7 mb-10">
      {window.history.state ? (
        <div
          onClick={() => router.back()}
          className={`${linkStyle} cursor-pointer`}
        >
          <BiArrowBack size={28} />
        </div>
      ) : (
        <div
          onClick={() => router.push("/")}
          className={`${linkStyle} cursor-pointer`}
        >
          <BiHomeAlt2 size={28} />
        </div>
      )}

      <NavLinks />
    </nav>
  );
}
