import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Section";
import Sidebar from "./_components/Card";
import Field from "./_components/Field";
import End from "./_components/End";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "JohnPaul-Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        <Field/>
        <End/>
        </body>
    </html>
  );
}
