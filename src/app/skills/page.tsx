import Image from "next/image";

const Skills = () => {
  return (
    <section className="flex flex-col items-center text-center py-20 px-4 mt-6">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <p className="max-w-xl mb-10">
        I have strong skills in core technologies and frameworks for creating
        dynamic, user-friendly applications.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-4">
        {/* HTML Box */}
        <div className="flex flex-col items-center gap-2 h-24 w-24 p-4 border rounded-lg border-gray-300 shadow-sm">
          <Image src="/html-logo.webp" alt="HTML logo" height={40} width={40} />
          <span className="text-sm font-medium text-gray-700">HTML</span>
        </div>

        {/* CSS Box */}
        <div className="flex flex-col items-center gap-2 h-24 w-24 p-4 border rounded-lg border-gray-300 shadow-sm">
          <Image src="/css-logo.webp" alt="CSS logo" height={40} width={40} />
          <span className="text-sm font-medium text-gray-700">CSS</span>
        </div>

        {/* JavaScript Box */}
        <div className="flex flex-col items-center gap-2 h-24 w-24 p-4 border rounded-lg border-gray-300 shadow-sm">
          <Image
            src="/javascript-logo.webp"
            alt="JavaScript logo"
            height={40}
            width={40}
          />
          <span className="text-sm font-medium text-gray-700">JavaScript</span>
        </div>

        {/* TypeScript Box */}
        <div className="flex flex-col items-center gap-2 h-24 w-24 p-4 border rounded-lg border-gray-300 shadow-sm">
          <Image
            src="/typescript-logo.png"
            alt="TypeScript logo"
            height={40}
            width={40}
          />
          <span className="text-sm font-medium text-gray-700">TypeScript</span>
        </div>

        {/* Nextjs Box */}
        <div className="flex flex-col items-center gap-2 h-24 w-24 p-4 border rounded-lg border-gray-300 shadow-sm">
          <Image
            src="/nextjs-icon.svg"
            alt="Nextjs logo"
            height={40}
            width={40}
          />
          <span className="text-sm font-medium text-gray-700">Nextjs</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
