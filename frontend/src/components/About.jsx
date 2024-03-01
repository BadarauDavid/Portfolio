import aboutImg from "../assets/about.jpg";

export default function About() {
  const yearOfExperienceMERN = 1;
  const yearOfExperienceJava = 1;
  const project = 5;
  return (
    <div className="py-10 dark:text-white dark:bg-[#232325] bg-gray-100 h-auto">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt=""
              className="object-cover bg-gray-700 rounded-xl h-[360px]  grayscale "
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="dark:text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p>
                I am a technology enthusiast who excels both as a team player
                and in handling independent problem-solving tasks. My passion
                for technology drives me to continuously expand my skill set and
                embrace new knowledge. I aim to showcase my current abilities
                while remaining committed to constant learning. I'm dedicated to
                leveraging my personal and professional skills to make a
                significant impact in the ever-evolving IT sector.{" "}
              </p>
            </div>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold dark:text-white">
                {project}
                <span> +</span>{" "}
              </h3>
              <p>
                <span className="md:text-base text-xs"> Projects</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold dark:text-white ">
                {yearOfExperienceJava}
                <span> +</span>{" "}
              </h3>
              <p>
                <span className="md:text-base text-xs"> Year's with Java</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold  dark:text-white text-center">
                {yearOfExperienceMERN}
                <span> +</span>{" "}
              </h3>
              <p>
                <span className="md:text-base text-xs"> Year's with MERN</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
