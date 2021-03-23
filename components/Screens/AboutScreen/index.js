import React from "react";
import DownloadIcon from "../../icons/Download";
import SkillItem from "../../elements/SkillItem";

const skill = [
  {
    name: "Frontend",
    options: [
      "JavaScript",
      "React/Redux/Context",
      "NExtjs",
      "Nodejs",
      "HTML/CSS",
      "Tailwind",
      "Material-Ui",
    ],
  },
  {
    name: "Backend",
    options: ["Express", "Graphql", "Mysql / Mongodb"],
  },
  {
    name: "Others",
    options: [],
  },
];

const AboutSceen = () => {
  return (
    <div>
      {/* Intro */}
      <div className="bg-black h-80">
        <div className="container h-full">
          <div className="flex flex-col justify-center h-full">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="mx-10 w-60 h-60 flex items-center justify-center rounded-full overflow-hidden">
                <img src="/images/DSC03969.jpg" />
              </div>
              <div className="col-span-2 text-white">
                <p className="text-4xl mb-2">PATRADANAI NAKPIMAY</p>
                <p className="mb-6">Frontend Devloper, Maintanance Engineer</p>

                <p className="mb-3 text-xl">Age : 27</p>
                <p className="mb-3 text-xl">Phone : +668-3949-1651</p>
                <p className="mb-3 text-xl">
                  E-mail : patradanai_n@hotmail.com
                </p>
                <p className="text-xl">
                  Address : 44 M.4 2/4 Donpao Meawang Chiang Mai 50360
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Personal Profile */}
      <div className="container">
        <div className="mt-5 space-y-5">
          <p className="text-3xl">Hi_</p>
          <p className="text-md" style={{ maxWidth: 920 }}>
            I am Junior Web developer able to build a Web presence from the
            ground up - from concept, navigation, layout and programming to UX
            and SEO. Skilled at writing well-designed, testable and efficient
            code using current best practices in Web development. Fast learner,
            hard worker and team player who is proficient in an array of
            scripting languages and multimedia Web tools.
          </p>
          <button className="bg-blue-300 text-white py-3 px-5 rounded-3xl">
            <DownloadIcon className="w-5 h-5 inline-block mx-3" />
            Download Resume
          </button>
        </div>
      </div>
      <hr className="border-2 my-10"></hr>
      {/* Skill */}
      <div className="container">
        <p className="text-3xl mb-14">Skills Overview_</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {skill?.map((val, index) => (
            <SkillItem key={index} name={val.name} options={val.options} />
          ))}
        </div>
      </div>
      <hr className="border-2 my-10"></hr>
      {/* Resume */}
      <div className="container">
        <p className="text-3xl">Resume_</p>
        {/* Work Experience */}
        <div></div>
        {/* Education History */}
        <div></div>
      </div>
    </div>
  );
};

export default AboutSceen;
