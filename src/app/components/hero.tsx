import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center py-20 px-4 mt-3">
      {/* Profile image */}
      <Image
        src="/profile.avif"
        alt="Profile"
        height={400}
        width={400}
        className="w-56 h-56 rounded-full mb-4"
      />
      {/* Name of the person */}
      <h2 className="text-4xl font-bold mb-2">Bisma Shah</h2>

      {/* Profession */}
      <p className="text-xl text-purple-600">Software Engineer</p>

      {/* Contact Me button */}
      <div className="flex space-x-4 mt-4">
        <button className="bg-gray-800 text-white font-bold h-12 w-48 py-2 rounded-full hover:bg-gray-700">
          <Link href='/contact'>Contact Me</Link>
        </button>

        {/* Social media icons (GitHub and LinkedIn) */}
      </div>
      <div className="flex space-x-4 mt-6 text-2xl">
        <Link href="https://github.com" className="hover:text-gray-500">
          <FaGithub />
        </Link>
        <Link href="https://linkedin.com" className="hover:text-gray-500">
          <FaLinkedin />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
