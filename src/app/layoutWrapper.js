"use client"

import { useSelector } from "react-redux";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";

export const RootLayoutWrapper = ({children}) => {
  const state = useSelector((state) => state)
  return <div>
    <Header />
    {state?.appReducer?.isLoggedIn && <Menu />}
    {children}
    <Footer />
  </div>
}
