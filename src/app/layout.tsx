import "./globals.css";
import { Inter } from "next/font/google";
import "@fontsource-variable/inter";
import "@fontsource/source-serif-pro/600.css";
import "@fontsource/source-serif-pro/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Sabari H",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
