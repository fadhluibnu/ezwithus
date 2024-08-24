import type { Metadata } from "next";
import "./globals.css";
import "./assets/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css"
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Make Projects Easy With Us. - EzWithUs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}