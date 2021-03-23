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
    icon: "/images/front-end.svg",
  },
  {
    name: "Backend",
    options: ["Express", "Graphql", "Mysql / Mongodb"],
    icon: "/images/database-storage.png",
  },
  {
    name: "Others",
    options: [
      "Python / C / C++",
      "PyQt5",
      "PLC / Arduino",
      "Autocad / Solidwork",
    ],
    icon: "/images/magnifying-glass.png",
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
            <SkillItem
              key={index}
              name={val.name}
              options={val.options}
              icon={val.icon}
            />
          ))}
        </div>
      </div>
      <hr className="border-2 my-10"></hr>
      {/* Resume */}
      <div className="container">
        <p className="text-3xl my-5">Resume_</p>
        {/* Work Experience */}
        <div className="uppercase">WORK Experience</div>
        <ul className="event">
          <li className="node">
            <div className="text-lg leading-3 font-bold">
              Murata Electronic Thailand, LTD
            </div>
            <div>2004-2010</div>
            <div>Full Stack</div>
          </li>
          <li className="node">2</li>
        </ul>
        {/* Education History */}
        <div className="uppercase">EDUCATION</div>
      </div>
      <style jsx>{`
        .event li {
          display: flex;
          flex-direction: column;
        }
        .event {
          margin-top: 1rem;
          margin-left: 1.5rem;

          border-left: 3px solid #000;
        }
        .node {
          padding-left: 1rem;
          padding-bottom: 1.5rem;
          position: relative;
        }

        .node::before {
          content: "";
          width: 1rem;
          height: 1rem;
          background: #fff;
          transform: translateX(-60%);
          border: 2px solid #ccc;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default AboutSceen;
