"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useStore } from "@/store/useStore";

const Footer = () => {
  const footerText = useStore((state) => state.footerText);
  return (
    <footer className="bg-gray-900 dark:bg-cyan-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0 w-full md:w-1/3">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            {footerText}
          </Link>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
            rerum.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-6 md:mb-0 w-full md:w-1/3">
          <Link href="/about" className="text-gray-400 hover:text-blue-400">
            About
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-blue-400">
            Services
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-blue-400">
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-4 w-full md:w-1/3">
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
