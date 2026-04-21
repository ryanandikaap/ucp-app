import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Nocturne Roleplay - UCP",
  description: "User Control Panel Nocturne Roleplay!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav className="navbar">
          <div className="navbar-brand">Nocturne Roleplay</div>
          <div className="navbar-links">
            <Link href="/" className="navbar-link">Beranda</Link>
            <Link href="/guide" className="navbar-link">Panduan RP</Link>
            <Link href="/login" className="navbar-link">Login UCP</Link>
            <Link href="/dashboard" className="navbar-link">Dasbor</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
