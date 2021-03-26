import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import ArticleItem from "../components/elements/ArticleItem";
import { ParsePosts } from "../functions/functions";
import BreadCrumb from "../components/elements/BreadCrumb";
import Pagination from "../components/elements/Pagination";

const itemPerPage = 3;

const Blogs = ({ data }) => {
  const [pageData, setPageData] = useState(null);
  const [countPage, setCountPage] = useState(1);

  // onChangePageination Page
  const onChangePagination = (number) => {
    setCountPage(number);
  };

  // update PageData by CurrentCount
  useEffect(() => {
    const newData = data?.slice(
      itemPerPage * countPage - itemPerPage,
      itemPerPage * countPage
    );

    setPageData(newData);
  }, [countPage]);

  return (
    <Layout>
      <div className="container">
        {/* BreadCrumbs */}
        <div className="my-3">
          <BreadCrumb>
            <Link href="/">
              <a className="text-xs text-gray-400">Homepage</a>
            </Link>
            <a className="text-xs text-gray-400">Articles</a>
          </BreadCrumb>
        </div>
        {/* Content */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 my-3 gap-3">
            {pageData?.map((val, index) => (
              <ArticleItem
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
        {/* Pagination */}
        <div className="text-center my-5">
          <Pagination
            handlePageClick={onChangePagination}
            pageCount={countPage}
            pageSize={itemPerPage}
            total={data?.length || 1}
          />
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
