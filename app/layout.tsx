import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { lato } from "./font/lato";

export const metadata: Metadata = {
  title: "My App",
  description:
    "Using local fonts and background in Next.js with Tailwind CSS v4",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="font-lato bg-[linear-gradient(170deg,_rgba(4,21,117,1)_0%,_rgba(2,11,61,1)_0%,_rgba(4,10,33,1)_10%,_rgba(0,0,0,1)_100%)] bg-no-repeat bg-cover bg-center min-h-screen w-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
