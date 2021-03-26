import React from "react";
import Layout from "../components/Layout";
import ArticleItem from "../components/elements/ArticleItem";
import { ParsePosts } from "../functions/functions";

const Blogs = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="container">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 my-3 gap-3">
            {data?.map((val, index) => (
              <ArticleItem
                key={index}
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
    </Layout>
  );
};

export const getServerSideProps = async () => {
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

  return { props: { data: ParsePosts(data) } };
};

export default Blogs;
