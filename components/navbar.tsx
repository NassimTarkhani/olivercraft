"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/60 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img
              src="/logo white.png"
              className="w-10 h-10 text-white"
              alt="Logo"
            />
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              <img src="whitetypo.png" className="w-15 h-5" alt="" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-white">
            <Link
              href="#work"
              className="text-sm uppercase tracking-wider hover:text-primary/80 transition-colors"
            >
              Work
            </Link>
            <Link
              href="#expertise"
              className="text-sm uppercase tracking-wider hover:text-primary/80 transition-colors"
            >
              Expertise
            </Link>
            <Link
              href="#about"
              className="text-sm uppercase tracking-wider hover:text-primary/80 transition-colors"
            >
              About
            </Link>
            <Link
              href="#news"
              className="text-sm uppercase tracking-wider hover:text-primary/80 transition-colors"
            >
              News
            </Link>
            <Link
              href="#contact"
              className="text-sm uppercase tracking-wider hover:text-primary/80 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-50 flex flex-col pt-20">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <Link
              href="#work"
              className="text-xl uppercase tracking-wider py-2 border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#expertise"
              className="text-xl uppercase tracking-wider py-2 border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="#about"
              className="text-xl uppercase tracking-wider py-2 border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#news"
              className="text-xl uppercase tracking-wider py-2 border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              href="#contact"
              className="text-xl uppercase tracking-wider py-2 border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
