import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oliver Jahren",
  description: "Oliver Jahren's personal website",
};

export default ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta charSet="UTF-8" />
    </head>

    <body className={inter.className}>{children}</body>
  </html>
);
