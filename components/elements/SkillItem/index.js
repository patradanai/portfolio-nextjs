import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "../../icons/Check";

const SkillItem = ({ name, options, icon }) => {
  return (
    <div
      className="relative border rounded-md pt-14"
      style={{ maxWidth: 400, height: 300 }}
    >
      <div className="absolute transform -translate-x-1/2 left-1/2 -top-10 w-20 h-20 rounded-full bg-blue-400 opacity-90 flex items-center justify-center">
        <img src={icon} className="w-10 h-10" />
      </div>
      <div className="flex flex-col items-center px-10">
        <p className="text-xl mb-3">{name}</p>
        <ul className="w-full">
          {options?.map((val, index) => (
            <li key={index}>
              <CheckIcon className="inline w-5 h-5 mr-2" />
              {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SkillItem.prototype = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SkillItem;
