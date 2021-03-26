import React from "react";
import moment from "moment";
import { useRouter } from "next/router";
import parser from "html-react-parser";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import Layout from "../../components/Layout";

const currentDate = moment(new Date());

const Blog = ({ data }) => {
  const router = useRouter();
  console.log(data);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="container">
        {/* Header */}
        <div className="flex justify-between">
          <div className="header-left">
            <h2 className="text-3xl font-bold">{data?.fields?.title}</h2>
            <p className="font-mono text-md">
              By
              <span className="ml-2 text-blue-600 font-semibold">
                {data?.fields?.authorName}
              </span>
              <span className="ml-5 mr-2">
                {moment
                  .duration(currentDate.diff(data?.fields?.date))
                  .asDays()
                  .toFixed(0)}
              </span>
              Day ago
            </p>
          </div>
          <div className="header-right flex items-center space-x-2">
            <span className="m-2 font-bold font-mono">Share : </span>
            <FacebookShareButton
              title={`${data?.fields.title}`}
              quote="#ตุ้มหูเกาหลี"
              hashtag="#ตุ้มหูเกาหลี"
              url={`https://doodeeshops.com/article/${data?.fields.title}`}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <LineShareButton
              title={`${data?.fields.title}`}
              url={`https://doodeeshops.com/article/${data?.fields.title}`}
            >
              <LineIcon size={40} round={true} />
            </LineShareButton>
            <TwitterShareButton
              title={`${data?.fields.title}`}
              url={`https://doodeeshops.com/article/${data?.fields.title}`}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </div>
        </div>
        <hr className="my-3" />
        {/* Content */}
        <div>{parser(data?.fields.content)}</div>
        <hr className="my-3" />
        {/* Footer Content */}
        <div></div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context;

  const res = await fetch(
    `https://api.aglty.io/413be464-u/fetch/en-us/item/${id}?contentLinkDepth=4`,
    {
      method: "GET",
      headers: {
        APIKey: process.env.NEXT_PUBLIC_API_KEY,
      },
    }
  );

  const data = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.aglty.io/413be464-u/fetch/en-us/list/posts",
    {
      method: "GET",
      headers: {
        APIKey: process.env.NEXT_PUBLIC_API_KEY,
      },
    }
  );
  const data = await res.json();

  let pathName = [];

  data?.items?.map((val) => {
    if (val) {
      pathName.push({ params: { id: val?.contentID.toString() } });
    }
  });

  console.log(pathName);
  return { paths: pathName, fallback: true };
};

export default Blog;
