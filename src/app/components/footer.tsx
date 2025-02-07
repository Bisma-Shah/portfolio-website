import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Main heading for the footer */}
        <h2 className=" font-semibold mt-3">BACK TO TOP</h2>

        {/* Social media links (GitHub, LinkedIn) */}
        <div className="flex space-x-4 mt-6 text-xl">
          <Link href="https://github.com" className="hover:text-gray-500">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com" className="hover:text-gray-500">
            <FaLinkedin />
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-xs flex items-center space-x-1 mt-5">
          <RiCopyrightLine className="text-xs" />
          <span>2024 Bisma Shah All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
