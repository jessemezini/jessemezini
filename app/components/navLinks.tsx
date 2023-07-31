import Link from "next/link";

import { linkStyle } from "./nav";

export default function NavLinks() {
  return (
    <div className="flex gap-x-6 text-zinc-400">
      <Link href="/portfolio" className={linkStyle}>
        Portfolio
      </Link>
      <Link href="/contact" className={linkStyle}>
        Contato
      </Link>
    </div>
  );
}
