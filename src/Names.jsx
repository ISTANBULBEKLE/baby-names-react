import React from "react";
import BabyNames from "./BabyNames.json";

const Names = () => {
  //  const newArr = BabyNames.sort((a, b) => (a === b ? 0 : a < b ? -1 : 1));
  const boysArr = BabyNames.filter((b) => b.sex === "m").sort((a, b) =>
    a.name === b.name ? 0 : a.name < b.name ? -1 : 1
  );
  const girlsArr = BabyNames.filter((g) => g.sex === "f").sort((a, b) =>
    a.name === b.name ? 0 : a.name < b.name ? -1 : 1
  );

  return (
    <div className="main-container container">
      <div className="boys-container col-6">
        <h1>Boys</h1>
        <div className="boys-names col">
          {boysArr.map((name) => (
            <p className="boys-p" key={boysArr.id}>
              {name.name}
            </p>
          ))}
        </div>
      </div>

      <div className="girls-container col-6">
        <h1>Girls</h1>
        <div className="girls-names col">
          {girlsArr.map((name) => (
            <span className="girls-p" key={girlsArr.id}>
              {name.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Names;
