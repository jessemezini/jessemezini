import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans_Condensed } from "next/font/google";

const fira = Fira_Sans_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesse Mezini",
  description: "Mobile Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  );
}
