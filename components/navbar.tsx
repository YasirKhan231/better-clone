"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold">
          Better
        </Link>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/aboutus" className="text-sm font-medium">
            About Us
          </Link>
          <Link href="/mortgageCalculator" className="text-sm font-medium">
            Mortgage Calculator
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost">Sign in</Button>
        <Button className="bg-[#0B8A5C] hover:bg-[#097a51]">Continue</Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              className="text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/mortgageCalculator"
              className="text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Mortgage Calculator
            </Link>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Sign in
            </Button>
            <Button
              className="bg-[#0B8A5C] hover:bg-[#097a51]"
              onClick={() => setIsOpen(false)}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
