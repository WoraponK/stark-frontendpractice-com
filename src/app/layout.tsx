import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.scss";

const inter = Inter({ subsets: ["latin"] });

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchLibrary from './components/SearchLibrary'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <div className="contents wrapper">
          <SearchLibrary />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
