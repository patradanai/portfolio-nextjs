import React, { useState, useEffect } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import parser from "html-react-parser";
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { ParseRelated } from "../../functions/functions";
import BreadCrumb from "../../components/elements/BreadCrumb";
import Layout from "../../components/Layout";
import ArticlesItem from "../../components/elements/ArticleItem";

const currentDate = moment(new Date());

const Blog = ({ data }) => {
  const [related, setRelated] = useState(null);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Parser Related
  useEffect(() => {
    if (data) {
      setRelated(ParseRelated(data?.fields?.related));
    }
  }, [data]);

  return (
    <Layout>
      <div className="container">
        <div className="my-3">
          <BreadCrumb>
            <Link href="/">
              <a className="text-xs text-gray-400">Homepage</a>
            </Link>
            <Link href="/blogs">
              <a className="text-xs text-gray-400">Articles</a>
            </Link>
            <a className="text-xs text-gray-400">{data?.fields?.title}</a>
          </BreadCrumb>
        </div>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="header-left">
            <h2 className="text-3xl font-bold">{data?.fields?.title}</h2>
            <p className="font-mono text-md mt-2">
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
          <div className="header-right flex items-center space-x-2 mt-3">
            <span className="mr-2 font-bold font-mono">Share : </span>
            <FacebookShareButton
              title={`${data?.fields?.title}`}
              quote="#portfolio"
              hashtag="#portfolio"
              url={`https://portfolio-nextjs-iota.vercel.app
              /blog/${data?.contentID}`}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <LineShareButton
              title={`${data?.fields?.title}`}
              url={`https://portfolio-nextjs-iota.vercel.app
              /blog/${data?.contentID}`}
            >
              <LineIcon size={40} round={true} />
            </LineShareButton>
            <TwitterShareButton
              title={`${data?.fields?.title}`}
              url={`https://portfolio-nextjs-iota.vercel.app
              /blog/${data?.contentID}`}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </div>
        </div>
        <hr className="my-3" />
        {/* Content */}
        <div className="my-3 p-3">{parser(data?.fields.content)}</div>
        <hr className="my-3" />
        {/* Footer Content */}
        <div>
          <p className="text-lg font-bold my-3">You may also like,</p>
          <div className="flex justify-items-start md:justify-center items-center overflow-x-auto">
            <div className="grid grid-cols-3 gap-3 p-3 flex-shrink-0">
              {related?.map((val, index) => (
                <ArticlesItem
                  key={index}
                  id={val?.contentId}
                  slug={val?.slug}
                  name={val?.title}
                  img={val?.image}
                  desc={val?.content}
                  category={val?.category}
                  author={val?.author}
                  date={val?.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context;

  const res = await fetch(
    `https://api.aglty.io/413be464-u/fetch/en-us/item/${id}?contentLinkDepth=1`,
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

  return { paths: pathName, fallback: true };
};

export default Blog;
