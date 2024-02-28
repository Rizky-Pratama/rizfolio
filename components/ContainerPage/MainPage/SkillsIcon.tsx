import { Icon } from "@iconify/react";

const ListSkills: String[] = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "php",
  "react",
  "nextjs",
  "laravel",
  "tailwindcss",
  "bootstrap",
  "nodejs",
  "mysql",
];
const SkillsIcon = () => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {ListSkills.map((skill,i) => (
        <Icon key={i} icon={`devicon:${skill}`} width="38px" height="38px" />
      ))}
    </div>
  );
};

export default SkillsIcon;
