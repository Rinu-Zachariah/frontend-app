import React from "react";
import AnyChart from "anychart-react";
import {getData} from "./data.js"

const SaturationContainer = () => {
  const data = getData();
  return (
    <div className="media-plan-container">
      <h3 className="media-plan-heading">Saturation Curve</h3>
      <div className="media-plan-context">
        <AnyChart
          type="line"
          data={data}
          title="Saturation curve"
        />
      </div>
    </div>
  );
};

export default SaturationContainer;
