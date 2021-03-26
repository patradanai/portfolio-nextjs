import React, { useEffect, useState } from "react";
import CardItem from "../../elements/CardItem";
import Pagination from "../../elements/Pagination";

const itemPerPage = 5;

const PortfolioSceen = ({ data }) => {
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
    <>
      <div className="container">
        <div className="text-3xl font-mono text-center mt-3">MY PROJECT</div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-1 gap-3">
            {pageData?.map((val, index) => (
              <CardItem
                key={index}
                name={val.name}
                desc={val.desc}
                stack={val.stack}
                web={val.link}
                img={val.image}
              />
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="block text-center my-5">
          <Pagination
            handlePageClick={onChangePagination}
            pageCount={countPage}
            pageSize={itemPerPage}
            total={data?.length || 1}
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioSceen;
