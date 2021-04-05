import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "JavaScript",
    title: "language that conforms to the ECMAScript specification",
    img: "script",
    class: "img1",
  },
  {
    id: 2,
    subtitle: "Node",
    title:
      "open-source, cross-platform, back-end JavaScript runtime environment ",
    img: "node",
    class: "img2",
  },
  {
    id: 3,
    subtitle: "React",
    title:
      "open-source, front end, JavaScript library for building user interfaces",
    img: "react",
    class: "img2",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                  className={caseItem.class}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
