export default function Education() {
  return (
    <div className="py-10 bg-[#232325]">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Education</span>
      </h2>

      <div className="mb-[20px] text-white relative bg-gray-800/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p>CodeCool(FullStack)</p>
        <p className="text-gray-400 ">(2022-2023) </p>
        <p className="text-gray-500 ">
          Java, SpringBoot, JavaScript, React, Postgresql, MongoDb, CSS, HTML,
          Node, Git, Tailwind,Effective Communication,Collaboration,Curiosity
          and Continuous Learning, Attention to Detail, Presentation Skills
        </p>
      </div>

      <div className="h-[50px] w-[2px] bg-gray-400 relative my-1 mx-auto"></div>

      <div className="mb-[20px] text-white relative bg-gray-800/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p>University „Alexandru Ioan Cuza”(Management)</p>
        <p className="text-gray-400 ">(2019-Present) </p>
        <p className="text-gray-500 ">
          {" "}
          Communication, Time Management,
          Teamwork,Problem-Solving,Adaptability,Empathy,Creativity,Stress
          Management,Continuous Learning
        </p>
      </div>

      <div className="h-[50px] w-[2px] bg-gray-400 relative my-1 mx-auto"></div>

      <div className="mb-[20px] text-white relative bg-gray-800/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p>College "Anghel Rugină"(Mathematics and Computer Science)</p>
        <p className="text-gray-400 ">(2010-2014)</p>
        <p className="text-gray-500 ">
          C++, Analytical Thinking, Problem-Solving, Logic,Patience and
          Perseverance,Mathematical Skills,Collaboration,Self-Learning,Technical
          Communication,Curiosity
        </p>
      </div>
    </div>
  );
}