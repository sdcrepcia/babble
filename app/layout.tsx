import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Babble",
  description: "A fun vocabulary app for toddlers — say a word, see a picture!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
