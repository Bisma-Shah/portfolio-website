import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex flex-col items-center py-16 px-8  text-black rounded-lg shadow-lg mt-10 ">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="text-lg text-center max-w-2xl mb-8">
        Feel free to reach out below or on social media—I’d love to connect!
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg bg-white rounded-lg p-8 shadow-md text-gray-800 space-y-4 border border-black">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Social Media Icons */}
      <div className="social-icons">
        <Link
          href="mailto:your-email@example.com"
          className="text-white hover:text-gray-300 transition duration-300 text-2xl"
        >
          <FaEnvelope />
        </Link>
        <Link
          href="tel:+123456789"
          className="text-white hover:text-gray-300 transition duration-300 text-2xl"
        >
          <FaPhoneAlt />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-300 text-2xl"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-300 text-2xl"
        >
          <FaGithub />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
