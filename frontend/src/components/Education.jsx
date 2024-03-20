export default function Education() {
  const allEducation = [
    {
      name: "CodeCool(FullStack)",
      year: "(2022-2023)",
      skills:
        " Java, SpringBoot, JavaScript, React, Postgresql, MongoDb, CSS, HTML, Node, Git, Tailwind, Effective Communication, Collaboration, Curiosity and Continuous Learning, Attention to Detail, Presentation Skills",
    },
    {
      name: "University „Alexandru Ioan Cuza”(Management)",
      year: "(2019-Present)",
      skills:
        "   Communication, Time Management, Teamwork, Problem-Solving, Adaptability, Empathy, Creativity, Stress Management, Continuous Learning",
    },
    {
      name: "College „Anghel Rugină”(Mathematics and Computer Science)",
      year: "(2010-2014)",
      skills:
        " C++, Analytical Thinking, Problem-Solving, Logic, Patience andPerseverance, Mathematical Skills, Collaboration, Self-Learning, TechnicalCommunication, Curiosity",
    },
  ];

  return (
    <div className="py-10  dark:text-white dark:bg-[#232325] bg-gray-100">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Education</span>
      </h2>
      {allEducation &&
        allEducation.map((e,index) => (
          <>
            <div className="mb-[20px] text-black dark:text-white relative bg-gray-800/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
              <p>{e.name}</p>
              <p className="dark:text-gray-400 text-gray-800">{e.year}</p>
              <p className="dark:text-gray-500 text-gray-700">{e.skills}</p>
            </div>
          
          
            {index !== allEducation.length - 1 && (
        <div className="h-[50px] w-[2px] bg-gray-400 relative my-1 mx-auto"></div>
      )}
          </>
        ))}
    </div>
  );
}
