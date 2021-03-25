import React from "react";
import DownloadIcon from "../../icons/Download";
import SkillItem from "../../elements/SkillItem";

const skill = [
  {
    name: "Frontend",
    options: [
      "JavaScript",
      "Nextjs",
      "React/Redux/Context",
      "Nodejs",
      "HTML/CSS",
      "Tailwind",
      "Material-Ui",
    ],
    icon: "/images/front-end.svg",
  },
  {
    name: "Backend",
    options: ["Express", "Graphql", "Mysql / SQL Server / Sqlite / Mongodb"],
    icon: "/images/database-storage.png",
  },
  {
    name: "Others",
    options: [
      "Python / Dart / C / C++",
      "React Native / Flutter",
      "Docker",
      "Git",
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
      <div
        className="relative flex items-center py-10 bg-black h-full"
        style={{ minHeight: 320 }}
      >
        <div
          className="absolute bg-cover bg-center top-0 left-0 w-full h-full opacity-40"
          style={{
            backgroundImage: "url(/images/mac.jpeg)",
          }}
        />
        <div className="container h-full relative z-20">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="mx-10 my-5 w-60 h-60 flex items-center justify-center rounded-full overflow-hidden">
                <img src="/images/DSC03969.jpg" />
              </div>
              <div className="col-span-2 text-white">
                <p className="text-4xl mb-2">PATRADANAI NAKPIMAY</p>
                <p className="mb-6">Web Devloper, Maintanance Engineer</p>

                <p className="mb-3 text-xl">
                  <span className="text-gray-300">Age :</span> 27
                </p>
                <p className="mb-3 text-xl">
                  <span className="text-gray-300">Phone :</span> +668-3949-1651
                </p>
                <p className="mb-3 text-xl">
                  <span className="text-gray-300">E-mail :</span>{" "}
                  patradanai_n@hotmail.com
                </p>
                <p className="text-xl">
                  <span className="text-gray-300">Address :</span> 44 M.4 2/4
                  Donpao Meawang Chiang Mai 50360, Thailand
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
            ground up - from gathering infomation,design concept, navigation,
            layout and programming to SEO. Skilled at writing well-designed, and
            efficient code using current best practices in Web development. Fast
            learner, hard worker.
          </p>
          <a href="/Patradanai Nakpimay.pdf">
            <button className="bg-blue-300 text-white py-3 px-5 rounded-3xl hover:bg-gray-500 mt-3">
              <DownloadIcon className="w-5 h-5 inline-block mx-3" />
              Download Resume
            </button>
          </a>
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
        <div className="uppercase text-xl pl-5 text-blue-500">
          WORK Experience
        </div>
        <ul className="event">
          <li className="node">
            <div className="text-lg leading-3 font-bold">
              Murata Electronic Thailand, LTD
            </div>
            <div className="mt-3 mb-2 text-sm">
              Software and Hardware Development | 2018 - 2020
            </div>
            <div className="list">
              Machine Inspect | Flutter,Express, SQL Server, Docker, Gafana
            </div>
            <div className="list">
              FaceDetection Check In | Python, Tensorflow, Facenet, RasPi
            </div>
            <div className="list">
              Machine Realtime Web App | React + Material-Ui,Express, SQL
              Server, Socket-io
            </div>
            <div className="list">
              Machine Realtime Hardware | Python, PYQt5, SQL Server, RasPi, PLC
              Mitsu, RS232, Enet
            </div>
            <div className="list">
              Temperature Monitor Realtime | React + Material-Ui,Express,
              Socket-io, Docker
            </div>
            <div className="list">
              Temperature Control Process, IOT Project | Arduino , Gafana
            </div>
            <div className="mt-3 mb-2 text-sm">
              Maintanance Engineer | 2016 - 2018
            </div>
            <div className="list">PLC Programing</div>
            <div className="list">
              Design Eqipment Machine SolidWork, Autocad
            </div>
            <div className="list">
              Design Schedule for Inspect machine point
            </div>
            <div className="list">Analyze Machine / Machine Control point</div>
            <div className="list">Summarize data for Machine report</div>
          </li>
        </ul>
        {/* Education History */}
        <div className="uppercase my-5 text-xl pl-5 text-blue-500">
          EDUCATION
        </div>
        <ul className="event">
          <li className="node">
            <div className="text-lg leading-3 font-bold">
              Chiang Mai University
            </div>
            <div className="mt-3 mb-2 text-sm">
              Machanical Engineerning | 2011 - 2015
            </div>
            <div className="list">Controller Programming Major</div>
            <div className="list">
              Bachelor's degree of Mechanical Engineering, Chiang Mai University
            </div>
          </li>
          <li className="node">
            <div className="text-lg leading-3 font-bold">
              Navamindarajudis Phayap College
            </div>
            <div className="mt-3 mb-2  text-sm">
              Math - Science | 2008 - 2011
            </div>
            <div className="list">Math - Science</div>
          </li>
        </ul>
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
        .event .list {
          margin-bottom: 0.5rem;
        }
        .event .list::before {
          padding-right: 0.5rem;
          display: inline;
          content: "->";
        }
      `}</style>
    </div>
  );
};

export default AboutSceen;
