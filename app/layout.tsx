import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HDS App",
  description: "Created for domains and hosting",
  generator: "Dev Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
