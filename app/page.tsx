"use client"
import MainLayout from "@/components/Layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Page() {
  return (
    <MainLayout>
      <h1 className="mb-6 text-2xl lg:text-4xl font-bold tracking-tighter">
        Welcome to my portfolio 👋🏻
      </h1>
      <section>
        <h2 className="text-xl lg:text-2xl font-bold tracking-tighter">
          About me 🧑🏻
        </h2>
        <p>
          I am a Frontend Developer with a passion for creating beautiful and
          accessible websites. I am currently an informatics engineering student
          at Indraprasta University. I am experienced in building
          websites using modern technologies such as React, Next.js, and
          Tailwind CSS. I love to learn new things and I am always looking for
          new opportunities to grow and improve my skills.
        </p>
      </section>
      <section>
        <h2 className="mt-3 mb-0 text-xl lg:text-2xl font-bold tracking-tighter">
          Projects 🚀
        </h2>
        <p>Here are some of the projects that I have worked on recently.</p>
        <div className="my-2">
          <Image
            className="rounded-lg"
            src={"/projects/login.jpeg"}
            width={500}
            height={200}
            alt="U-library login page"
            priority
          />
          <Link href={"https://u-libray.vercel.app/login"} target="_blank">
            <h3 className="text-lg lg:text-xl font-bold tracking-tighter underline hover:text-indigo-500">
              U-library
            </h3>
          </Link>
          <p>
            U-library is a web application that allows users to rent books from
            the library. It is built using React, Nextjs, Mysql, Prisma ORM and
            Tailwind CSS.
          </p>
        </div>
        <div className="my-2">
          <Image
            className="rounded-lg"
            src={"/projects/makaryo.png"}
            width={500}
            height={200}
            alt="Makaryo landing page"
            priority
          />
          <Link href={"https://makaryo-eight.vercel.app/"} target="_blank">
            <h3 className="text-lg lg:text-xl font-bold tracking-tighter underline hover:text-indigo-500">
              Makaryo | Landing Page
            </h3>
          </Link>
          <p>
            Makaryo is a web application that allows users to find their dream
            job. It is built using vite, React and Tailwind CSS.
          </p>
        </div>
        <div className="my-2">
          <Image
            className="rounded-lg"
            src={"/projects/ezpay.png"}
            width={500}
            height={200}
            alt="Ezpay landing page"
            priority
          />
          <Link href={"https://ezypay-weld.vercel.app/"} target="_blank">
            <h3 className="text-lg lg:text-xl font-bold tracking-tighter underline hover:text-indigo-500">
              Ezpay | Landing Page
            </h3>
          </Link>
          <p>
            Ezpay is a web application that allows users to pay their bills
            online. It is built html, css and Tailwind CSS.
          </p>
        </div>
      </section>
      <section>
        <h2 className="mt-3 mb-0 text-xl lg:text-2xl font-bold tracking-tighter">
          Education 🎓
        </h2>
        <ul className="ml-5 list-disc">
          <li>
            <h3 className="text-lg lg:text-xl font-bold tracking-tighter">
              Bachelor of Science in Computer Science
            </h3>
            <p>University of Indraprasta (expec: 2022 - 2026)</p>
          </li>
          <li>
            <h3 className="text-lg lg:text-xl font-bold tracking-tighter">
              Vocational School Majoring in Software Engineering
            </h3>
            <p>SMK Fatahillah (2019 - 2022)</p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="mt-3 mb-0 text-xl lg:text-2xl font-bold tracking-tighter">
          Skills 🛠
        </h2>
        <div className="mt-2 flex flex-wrap gap-2">
          <Icon icon="devicon:html5" width="38px" height="38px" />
          <Icon icon="devicon:css3" width="38px" height="38px" />
          <Icon icon="devicon:javascript" width="38px" height="38px" />
          <Icon icon="devicon:php" width="38px" height="38px" />
          <Icon icon="devicon:typescript" width="38px" height="38px" />
          <Icon icon="devicon:reactjs" width="38px" height="38px" />
          <Icon icon="devicon:nextjs" width="38px" height="38px" />
          <Icon icon="devicon:tailwindcss" width="38px" height="38px" />
          <Icon icon="devicon:bootstrap" width="38px" height="38px" />
          <Icon icon="devicon:mysql" width="38px" height="38px" />
          <Icon icon="devicon:sqlite" width="38px" height="38px" />
          <Icon icon="devicon:prisma" width="38px" height="38px" />
          <Icon icon="devicon:wordpress" width="38px" height="38px" />
          <Icon icon="devicon:laravel" width="38px" height="38px" />
        </div>
      </section>
    </MainLayout>
  );
}
