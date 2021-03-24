import React from "react";
import CardItem from "../../elements/CardItem";

const myProject = [
  {
    name: "Mobile and Desktop for Portfolio",
    desc: "",
    stack: ["NEXTJS", "Tailwind"],
    image: "/images/Portfolio.png",
    link: "www.doodeeshops.com",
  },
  {
    name: "Mobile and Desktop for E-Commerence ",
    desc: "",
    stack: [
      "NEXTJS",
      "Tailwind",
      "Graphql",
      "Wordpress",
      "Docker",
      "Digital Ocean",
    ],
    image: "/images/E-comerence.png",
    link: "www.doodeeshops.com",
  },
  {
    name: "Mobile and Desktop for LIVESCORE FOOTBALL,BASKETBALL",
    desc: "",
    stack: ["NEXTJS", "Material UI", "EXPRESS", "DYNAMO AWS", "Digital Ocean"],
    image: "/images/Livescore.png",
    link: "www.dooscore.live",
  },
  {
    name: "Mobile and Desktop for Thai Restaurant in UK",
    desc: "",
    stack: ["NEXTJS", "Material Ui", "EXPRESS", "FIREBASE", "DOCKER"],
    image: "/images/Thai Restaurant.png",
    link: "www.thaivintagewhitchurch.co.uk",
  },
];

const PortfolioSceen = () => {
  return (
    <>
      <div className="container">
        <div className="text-3xl font-mono text-center mt-3">MY PROJECT</div>
        {myProject.map((val, index) => (
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
    </>
  );
};

export default PortfolioSceen;
