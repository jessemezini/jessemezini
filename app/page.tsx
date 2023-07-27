import Link from "next/link";
import NavLinks from "./components/navLinks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <NavLinks />
      <h1 className="text-7xl font-bold my-5">Jesse Mezini</h1>
      <h2 className="text-3xl text-zinc-400">Mobile Developer</h2>
    </main>
  );
}
