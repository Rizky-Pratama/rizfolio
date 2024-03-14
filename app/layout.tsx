import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Muhammad Rizky Pratama", template: "%s | Rizfolio" },
  description:
    "Website portfolio Muhammad Rizky Pratama as a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-stone-950 text-white"}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-FYMNZZGCQQ" />
    </html>
  );
}
