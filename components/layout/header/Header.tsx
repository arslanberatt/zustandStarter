"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Search, User } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "@/components/ModeToggle";
import { useStore } from "@/store/useStore";

const Header = () => {
  const { headerText } = useStore();

  return (
    <header className="bg-gray-900 dark:bg-cyan-900 shadow-sm top-0">
      <div className="container flex mx-auto items-center justify-between px-4 py-3">
        <Link href="/" className="text-white text-2xl font-bold">
          {headerText}
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white font-medium hover:text-gray-200">
            Home
          </Link>
          <Link
            href="/blog"
            className="text-white font-medium hover:text-gray-200"
          >
            Blog
          </Link>
          <Link
            href="/blog2"
            className="text-white font-medium hover:text-gray-200"
          >
            Blog2
          </Link>
          <Link
            href="/about"
            className="text-white font-medium hover:text-gray-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white font-medium hover:text-gray-200"
          >
            Contact
          </Link>
        </nav>

        <div className="flex space-x-3 items-center">
          <Button variant="ghost" className="text-white hover:bg-white">
            <Search />
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white">
            <User />
          </Button>
          <MobileMenu />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
