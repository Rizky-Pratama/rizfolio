import Projects from "@/components/ContainerPage/Projects";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Projects",
  description: "Here are some of the projects that I have worked on recently."
}

const Page = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>Here are some of the projects that I have worked on recently.</p>
      <Projects />
    </div>
  );
};

export default Page;
