import React from "react";

const PrescriptionResult = (props) => {
  const { age, date, gender, medicines, notes, username } = props;
  return (
    <div className="page">
      <section id="hospital">
        <h1>{"Spitalul TST"}</h1>
        <div className="dr-dt">
          <h3 className="fs-1_5">{"Dr. Vlad Andrei"}</h3>
          <span className="fs-0_3">{"O.R.L (otorinolaringologie)"}</span>
        </div>
        <p>
          Strada Nicolae Bălcescu, 56
        </p>
      </section>
    </div>
  );
};

export default PrescriptionResult;