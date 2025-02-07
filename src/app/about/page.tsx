import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left py-20 px-7 lg:px-20 gap-8 mt-2">
      {/* Left Side Image */}
      <div className="flex-shrink-0">
        <Image
          src="/profile.avif"
          alt="Profile"
          height={400}
          width={400}
          className="w-56 h-56 rounded-full lg:mb-0 mb-6"
        />
      </div>

      {/* Right Side Text */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
        <h1 className="text-4xl font-bold mt-5">Who I am?</h1>
        <p className="leading-relaxed mt-5">
          Hey There 👋🏻 I am{" "}
          <span className="font-bold text-purple-600">Bisma shah</span> from
          Karachi, Pakistan. I’m currently studying cloud computing and
          generative AI at GIAIC, working towards becoming a Certified Cloud
          Applied Generative AI Engineer.
        </p>
        <p className="leading-relaxed mt-5">
          I have a strong foundation in web development technologies like HTML,
          CSS, TypeScript, JavaScript, and frameworks such as React and Tailwind
          CSS. I am currently learning Next.js and working on improving my
          skills in web development. My goal is to create high-quality and
          responsive web applications. I’m passionate about leveraging my skills
          in cloud and AI technologies to develop innovative and scalable
          solutions that meet clients' needs and exceed their expectations.
        </p>

        {/* Right Side Button */}
        <button className="bg-gray-800 text-white font-bold h-12 w-48 mt-5 py-2 rounded-full hover:bg-gray-700">
          <Link href="/Resume.jpeg">View Resume</Link>
        </button>
      </div>
    </section>
  );
};

export default About;
