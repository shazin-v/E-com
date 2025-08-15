import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/Providers";
import HeaderFooter from "@/components/common/HeaderFooter";
import { ToastContainer } from "react-toastify";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],F
// });

export const metadata: Metadata = {
  title: "Krist - Ecomerce",
  description: "Created by developers for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunito.variable} antialiased`}>
        <ToastContainer position="top-center" />
        <Providers>
          <HeaderFooter>{children}</HeaderFooter>
        </Providers>
      </body>
    </html>
  );
}
