"use client"
import MainLayout from "@/components/Layouts/MainLayout";
import { Icon } from '@iconify/react';
import Projects from "@/components/ContainerPage/MainPage/Projects";
import Education from "@/components/ContainerPage/MainPage/Education";
import SkillsIcon from "@/components/ContainerPage/MainPage/SkillsIcon";
import Link from "next/link";

export default function Page() {
  return (
    <MainLayout>
      <h1>Welcome to my portfolio 👋🏻</h1>
      <div className="mt-5 space-y-4">
        <section>
          <h2>About me 🧑🏻</h2>
          <p>
            I am a Frontend Developer with a passion for creating beautiful and
            accessible websites. I am currently an informatics engineering
            student at Indraprasta University. I am experienced in building
            websites using modern technologies such as React, Next.js, and
            Tailwind CSS. I love to learn new things and I am always looking for
            new opportunities to grow and improve my skills.
          </p>
        </section>
        <section>
          <h2>Projects 🚀</h2>
          <p>Here are some of the projects that I have worked on recently.</p>
          <Projects />
          <Link href="/projects">
            <span className="text-blue-500">
              View all projects
              <Icon icon="akar-icons:arrow-right" className="inline" />
            </span>
          </Link>
        </section>
        <section>
          <h2>Education 🎓</h2>
          <Education />
        </section>
        <section>
          <h2>Skills 🛠</h2>
          <SkillsIcon />
        </section>
      </div>
    </MainLayout>
  );
}
