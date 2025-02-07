"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Ham = () => {
  const [isOpen, setIsOpen] = useState(false);
       {/* Hamburger Icon for Mobile */}
       <div className="md:hidden flex items-center">
       <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
         <FiMenu />
       </button>

        {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-72 w-1/2 bg-gray-800 text-white font-bold py-5 px-3 transform transition-transform ${
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
          <Link href="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/skills" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
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
     </div>
}

export default Ham
