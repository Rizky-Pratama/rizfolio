import Image from "next/image";
import Link from "next/link";

const ProjectsList = [
  {
    title: "U-library",
    description:
      "U-library is a web application that allows users to rent books from the library. It is built using React, Nextjs, Mysql, Prisma ORM and Tailwind CSS.",
    image: "/projects/login.png",
    url: "https://u-libray.vercel.app/login",
  },
  {
    title: "Makaryo | Landing Page",
    description:
      "Makaryo is a landing page for a fictional company. It is built using React, Nextjs, and Tailwind CSS.",
    image: "/projects/makaryo.png",
    url: "https://makaryo-eight.vercel.app/",
  },
  {
    title: "Ezpay | Landing Page",
    description:
      "Ezpay is a landing page for a fictional company. It is built using React, Nextjs, and Tailwind CSS.",
    image: "/projects/ezpay.png",
    url: "https://ezypay-weld.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="space-y-3">
      {ProjectsList.map((project, i) => (
        <div key={i}>
          <Image
            className="rounded-lg"
            src={project.image}
            width={500}
            height={200}
            alt={project.title}
            priority
          />
          <Link href={project.url} target="_blank">
            <h3 className="underline">
              {project.title}
            </h3>
          </Link>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
