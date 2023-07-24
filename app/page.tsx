import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex gap-x-3">
        <Link href="/portfolio" className="hover:underline">
          Portfolio
        </Link>
        <p>|</p>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
      <h1 className="text-7xl font-bold my-5">Jesse Mezini</h1>
      <h2 className="text-3xl">Mobile Developer</h2>
    </main>
  );
}
