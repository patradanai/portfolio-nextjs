import React from "react";
import Layout from "../components/Layout";
import PortfolioScreen from "../components/Screens/PorfolioScreen";
import { ParseProject } from "../functions/functions";
const Portfolio = ({ project }) => {
  return (
    <Layout>
      <PortfolioScreen data={project} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.aglty.io/413be464-u/fetch/en-us/list/projects",
    {
      method: "GET",
      headers: {
        APIKey: process.env.NEXT_PUBLIC_API_KEY,
      },
    }
  );

  const data = await res.json();

  return { props: { project: ParseProject(data) } };
};

export default Portfolio;
