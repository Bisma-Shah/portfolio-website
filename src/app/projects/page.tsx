import Image from "next/image"

const Projects = () => {
  return (
    <section>
      <h1 className='font-bold text-center mt-20 text-4xl'>What I Have Built So Far?</h1>
      <div>
        <h2>Simple-Calculator</h2>
        <p>
        A simple yet functional calculator web application developed using HTML, CSS, and JavaScript. This project serves as a demonstration of key principles of front-end web development, including the creation of responsive user interfaces, integration of styling techniques, and effective manipulation of the Document Object Model (DOM) to enable dynamic functionality. It showcases the foundational skills required for building interactive and user-friendly web applications.
        </p>
         {/* HTML Box */}
         <div className="flex flex-col items-center gap-2 h-24 w-24 p-4 border rounded-lg border-gray-300 shadow-sm">
          <Image src="/html-logo.webp" alt="HTML logo" height={40} width={40} />
        </div>

         {/* CSS Box */}
         <div className="h-24 w-24 border- rounded-lg border-gray-300 shadow-sm">
          <Image src="/css-logo.webp" alt="CSS logo" height={40} width={40} />
          <span className="text-sm font-medium text-gray-700">CSS</span>
        </div>

          {/* JavaScript Box */}
          <div className=" h-13 w-12 border-none rounded-3xl border-gray-300 shadow-sm">
          <Image
            src="/javascript-logo.webp"
            alt="JavaScript logo"
            height={45}
            width={45}
          />
        </div>
      
      </div>
      <div>

      </div>
    </section>
  )
}

export default Projects