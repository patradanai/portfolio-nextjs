import React from "react";
import CardItem from "../../elements/CardItem";

const myProject = [
  {
    name: "Mobile and Desktop for Portfolio",
    desc:
      "This is my own website, The website includes about basic my information, my contacys, my project related to web devlopment",
    stack: ["NEXTJS", "Tailwind"],
    image: "/images/Portfolio.png",
    link: "www.doodeeshops.com",
  },
  {
    name: "Mobile and Desktop for E-Commerence ",
    desc:
      "doodeeshops is website that design for supporting selling my accessories such as earrings and this website integrate with wordpress that help us to manage backoffice.",
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
    desc:
      "dooscore is livescore website that support monitoring football and bastket ball realtime.",
    stack: ["NEXTJS", "Material UI", "EXPRESS", "DYNAMO AWS", "Digital Ocean"],
    image: "/images/Livescore.png",
    link: "www.dooscore.live",
  },
  {
    name: "Mobile and Desktop for Thai Restaurant in UK",
    desc:
      "thaivintage is thai's restarant in uk that support customer spread information and booked a table.",
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
