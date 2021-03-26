import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const ArticleItem = ({ slug, name, img, desc, category, author, date }) => {
  return (
    <div
      className="w-full h-full shadow-md rounded"
      style={{ maxWidth: 350, maxHeight: 480 }}
    >
      {/* Image */}
      <div>
        <Image
          src="https://kiranworkspace.com/demo/projects/code-snippets/blog/blog-card/images/p4.jpg"
          width={350}
          height={220}
        />
      </div>
      {/* Text */}
      <div className="block-container pt-2 px-4">
        <span className="bg-yellow-400 p-1 rounded text-black text-sm font-semibold">
          Technology
        </span>
        <h4 className="text-2xl font-bold font-mono">Technology is good</h4>
        <p className="my-3 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
          ullam, reprehenderit? Praesentium doloribus soluta, quia.
        </p>
        <hr />
        <p className="py-3 font-medium">
          By <a className="text-blue-600">KiranAcharya</a>
          <span className="float-right">2 Day ago</span>
        </p>
      </div>
    </div>
  );
};

ArticleItem.propsTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ArticleItem;
