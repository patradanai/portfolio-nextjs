import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import parser, { domToReact } from "html-react-parser";

const CardItem = ({ name, desc, stack, web, img }) => {
  return (
    <div className="border rounded shadow hover:shadow-lg my-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="relative w-full h-full" style={{ minHeight: 250 }}>
          <Image src={img} layout="fill" />
        </div>
        <div className="col-span-2 p-10">
          <div className="flex flex-col">
            <p className="text-xl font-semibold mb-5">{name}</p>
            <p className="text-gray-500 mb-10">
              {parser(desc || "", {
                replace: (domNode) => {
                  if (domNode.name == "p") {
                    return <>{domToReact(domNode.childNodes)}</>;
                  }
                },
              })}
            </p>
            <div>
              <p className="mb-1">Used Stack :</p>
              <ul className="flex flex-wrap">
                {stack.map((val, index) => (
                  <li
                    className="inline bg-blue-300 text-white p-1 rounded shadow mr-2 mb-2"
                    key={index}
                  >
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full mt-10 flex justify-end items-end">
            <a
              href={`https://${web}`}
              title="DooDeeShops"
              target="_blank"
              rel="noopener noreferrer"
            >
              {web}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

CardItem.prototype = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  web: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardItem;
