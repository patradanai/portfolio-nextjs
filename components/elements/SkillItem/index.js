import React from "react";
import CheckIcon from "../../icons/Check";
const SkillItem = () => {
  return (
    <div
      className="relative border rounded-md pt-14"
      style={{ maxWidth: 400, height: 300 }}
    >
      <div className="absolute transform -translate-x-1/2 left-1/2 -top-10 w-20 h-20 rounded-full bg-red-400"></div>
      <div className="flex flex-col items-center px-10">
        <p className="text-xl mb-3">Frontend</p>
        <ul className="w-full">
          <li>
            <CheckIcon className="inline w-5 h-5 mr-2" />
            JavaScirpt
          </li>
          <li>
            <CheckIcon className="inline w-5 h-5 mr-2" />
            React/Redux/Content
          </li>
          <li>
            <CheckIcon className="inline w-5 h-5 mr-2" />
            Nextjs
          </li>
          <li>
            <CheckIcon className="inline w-5 h-5 mr-2" />
            HTML/CSS
          </li>
          <li>
            <CheckIcon className="inline w-5 h-5 mr-2" />
            Node.js
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillItem;
