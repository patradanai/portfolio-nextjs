import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import parse, { domToReact } from "html-react-parser";

const currentDate = moment(new Date());

const ArticleItem = ({ slug, name, img, desc, category, author, date, id }) => {
  return (
    <div
      className="w-full h-full shadow-md rounded"
      style={{ maxWidth: 350, maxHeight: 480 }}
    >
      {/* Image */}
      <Link href={`/blog/[id]`} as={`/blog/${id}`}>
        <div>
          <Image src={img?.url} width={350} height={220} />
        </div>
      </Link>
      {/* Text */}
      <div className="block-container pt-2 px-4">
        <span className="bg-yellow-400 p-1 rounded text-black text-sm font-semibold">
          {name}
        </span>
        <h4 className="text-2xl font-bold font-mono">{category}</h4>
        <p className="my-3 text-gray-500 h-24 overflow-hidden overflow-clip">
          {parse(desc, {
            replace: (domNode) => {
              if (domNode.name == "p") {
                return <>{domToReact(domNode.children)}</>;
              }

              if (domNode.name == "h2") {
                return <>{domToReact(domNode.children)}</>;
              }
            },
          })}
        </p>
        <hr />
        <p className="py-3 font-medium text-sm">
          By <a className="text-blue-600">{author}</a>
          <span className="float-right">
            {moment.duration(currentDate.diff(date)).asDays().toFixed(0)} Day
            ago
          </span>
        </p>
      </div>
    </div>
  );
};

ArticleItem.propsTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ArticleItem;
