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
      <hr />
      <section id="prescription">
        <div className="d-flex end">
          <label>{"S.No. : "}</label>
          <input type="text" value={Date.now()} disabled />
        </div>
        <div className="d-flex space">
          <div className="gm">
            <label>{"Nume Pacient: "}</label>
            <input type="text" className="w-17" value={username} disabled />
          </div>
          <div>
            <label>{"Vârstă : "}</label>
            <input type="text" className="w-5" value={age} disabled />
          </div>
          <div>
            <label>{"Sex : "}</label>
            <input type="text" className="w-5" value={gender} disabled />
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default PrescriptionResult;
