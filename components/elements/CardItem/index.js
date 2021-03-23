import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const CardItem = ({ name, desc, stack, web, img }) => {
  return (
    <div className="border rounded shadow w-full h-full hover:shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="relative w-full" style={{ minHeight: 250 }}>
          <Image
            src="https://previews.aspirity.com/spirit/assets/img/img_project_1_mono.png"
            layout="fill"
          />
        </div>
        <div className="col-span-2 p-10">
          <div className="flex flex-col">
            <p className="text-xl font-semibold mb-5">
              MOBILE AND DESKTOP APP FOR LONDON HOSTEL STORE
            </p>
            <p className="text-gray-500 mb-10">
              Do answered bachelor occasion in of offended no concerns. Supply
              worthy warmth branch of no ye. Voice tried known to as my to.
              Though wished merits or be. Alone visit use these smart rooms ham.
            </p>
            <div>
              <p className="mb-1">Used Stack :</p>
              <ul className="flex flex-wrap">
                <li className="inline bg-blue-300 text-white p-1 rounded shadow mr-2">
                  JavaScirpt
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mt-10 flex justify-end items-end">
            <a href="https://www.doodeeshops.com" title="DooDeeShops">
              www.doodeeshops.com
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
