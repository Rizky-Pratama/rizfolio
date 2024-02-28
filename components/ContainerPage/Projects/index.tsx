import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
  repository?: string;
}

const ProjectsList: Project[] = [
  {
    title: "U-library",
    description:
      "U-library is a web application that allows users to rent books from the library. It is built using React, Nextjs, Mysql, Prisma ORM and Tailwind CSS.",
    image: "/projects/login.png",
    url: "https://u-libray.vercel.app/",
    repository: "https://github.com/Rizky-Pratama/e-library",
  },
  {
    title: "Makaryo | Landing Page",
    description:
      "Makaryo is a landing page for a fictional company. It is built using React, Nextjs, and Tailwind CSS.",
    image: "/projects/makaryo.png",
    url: "https://makaryo-eight.vercel.app/",
    repository: "https://github.com/Rizky-Pratama/Makaryo-landing-page",
  },
  {
    title: "Ezpay | Landing Page",
    description:
      "Ezpay is a landing page for a fictional company. It is built using React, Nextjs, and Tailwind CSS.",
    image: "/projects/ezpay.png",
    url: "https://ezypay-weld.vercel.app/",
    repository: "https://github.com/Rizky-Pratama/ezypay-tailwind",
  },
  {
    title: "Rizlam | Al-Quran Online",
    description:
      "Rizlam is web al-quran application that allows users to read quran. It is built using React, Nextjs, and Tailwind CSS.",
    image: "/projects/rizlam.png",
    url: "https://rizlam.vercel.app/",
    repository: "https://github.com/Rizky-Pratama/al-quran-online",
  },
];

const Projects = () => {
  return (
    <div className="pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {ProjectsList.map((project, index) => (
          <div
            key={index}
            className="xl:flex bg-stone-900 shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-56 xl:w-1/2 object-cover"
              width={300}
              height={200}
              priority
              quality={100}
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-stone-200 text-justify">
                {project.description}
              </p>
              <div className="mt-8 space-x-3">
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-6 rounded-md bg-gradient-to-br from-indigo-500  to-indigo-600 hover:text-white  hover:from-indigo-400 hover:to-indigo-300 transition-all duration-100 cursor-pointer"
                  >
                    Visit
                  </Link>
                )}
                {project.repository && (
                  <Link
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white/50 underline cursor-pointer"
                  >
                    Repository
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
