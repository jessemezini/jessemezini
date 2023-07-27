import Link from "next/link";
import NavLinks from "./navLinks";

import { BiArrowBack } from "react-icons/bi";

export const linkStyle =
  "duration-200 text-zinc-600 hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center h-20 max-w-7xl mx-auto px-7 mb-10">
      <Link href="/" className={linkStyle}>
        <BiArrowBack size={28} />
      </Link>

      <NavLinks />
    </nav>
  );
}
