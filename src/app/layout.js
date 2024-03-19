"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { appStore } from "@/redux/store/appStore";
import { Provider } from "react-redux";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={appStore}>
          <Header />
          <Menu />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
