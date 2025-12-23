import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { siteConfig } from "./lib/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.name} - Premium Property Rentals`,
  description: siteConfig.description,
  keywords: "luxury homes, property rental, real estate, Hawaii properties, premium rentals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
