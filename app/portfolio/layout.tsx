import Nav from "../components/nav";

const textColor =
  "[&>p]:text-zinc-600 [&>p]:dark:text-zinc-300 [&>ul>li]:text-zinc-600 [&>ul>li]:dark:text-zinc-300";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main
        className={`max-w-6xl mx-auto p-5 ${textColor} text-center flex flex-col items-center`}
      >
        {children}
      </main>
    </div>
  );
}
