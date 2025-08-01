import Header from "@/src/app/Header";
import Footer from "@/src/app/Footer";
import "./globals.scss";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oliver Jahren",
  description: "Oliver Jahren's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer githubRepoUrl={"https://github.com/orjahren/portofolio"} />
      </body>
    </html>
  );
}
