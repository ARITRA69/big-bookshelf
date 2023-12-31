import Navbar from "@/components/Navbar/page";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";


const Poppins = localFont({ src: "../../public/fonts/Poppins-Regular.ttf" });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={Poppins.style}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
