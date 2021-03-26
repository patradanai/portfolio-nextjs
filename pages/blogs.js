import React from "react";
import Layout from "../components/Layout";
import ArticleItem from "../components/elements/ArticleItem";

const Blogs = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="container">
        <ArticleItem />
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

  return { props: { data } };
};

export default Blogs;
