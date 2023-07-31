import Nav from "../components/nav";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-6xl mx-auto p-5">{children}</main>
    </div>
  );
}
