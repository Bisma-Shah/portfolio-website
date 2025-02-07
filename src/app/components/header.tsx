"use client";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-3 px-7 bg-gray-800 text-white rounded-full mx-auto w-2/3 mt-5">
      {/* Main heading for the site */}
      <h1 className="text-xl font-bold">Bisma</h1>

      {/* Desktop Navigation links */}
      <nav className="space-x-4 hidden md:flex font-semibold">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link href="/skills" className="hover:text-gray-400">
          Skills
        </Link>
        <Link href="/contact" className="hover:text-gray-400">
          Contact
        </Link>
      </nav>

      {/* GitHub button */}
      <Link
        href="https://github.com"
        className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-500 hidden md:block"
      >
        Visit GitHub
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gray-800 text-white font-bold py-5 px-3 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl absolute top-4 right-4"
        >
          &times;
        </button>
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/skills"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="https://github.com"
            className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-500 flex justify-center text-center"
            onClick={() => setIsOpen(false)}
          >
            Visit GitHub
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


