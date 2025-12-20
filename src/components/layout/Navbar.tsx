"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-sandava.png";

interface NavbarProps {
  activePage?: "home" | "services" | "solutions" | "about" | "contact";
}

export default function Navbar({ activePage = "home" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", key: "home" },
    { href: "/services", label: "Services", key: "services" },
    { href: "/solutions", label: "Solutions", key: "solutions" },
    { href: "/about", label: "About", key: "about" },
    { href: "/contact", label: "Contact", key: "contact" },
  ];

  return (
    <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm h-16">
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center h-full">
          <Link href="/">
            <Image 
              src={logo} 
              alt="Sandava" 
              className="h-[138px] w-auto" 
              height={138}
              priority
              placeholder="empty"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center gap-10 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  activePage === link.key
                    ? "text-brand-600"
                    : "hover:text-brand-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Us Button - Hide on contact page */}
          {activePage !== "contact" && (
            <div className="hidden md:block">
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`block text-base font-medium transition-colors ${
                  activePage === link.key
                    ? "text-brand-600"
                    : "hover:text-brand-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
