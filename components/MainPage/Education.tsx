const EducationList = [
  {
    title: "Bachelor of Science in Computer Science",
    school: "University of Indraprasta",
    year: "expec: 2022 - 2026",
  },
  {
    title: "Vocational School Majoring in Software Engineering",
    school: "SMK Fatahillah",
    year: "2019 - 2023",
  },
];

const Educaton = () => {
  return (
    <ul className="ml-5 list-disc">
      {EducationList.map((education,i) => (
      <li key={i}>
        <h3>
          {education.title}
        </h3>
        <p>{education.school} ({education.year})</p>
      </li>
    ))}
    </ul>
  );
}

export default Educaton 