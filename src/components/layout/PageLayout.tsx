"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "@/components/ui/BackToTop";

interface PageLayoutProps {
  children: ReactNode;
  activePage?: "home" | "services" | "solutions" | "about" | "contact";
}

export default function PageLayout({ children, activePage = "home" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar activePage={activePage} />
      
      <main>{children}</main>
      
      <Footer />
      
      <BackToTop />
    </div>
  );
}
