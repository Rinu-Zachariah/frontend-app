import React, { useState } from "react";

import DatePickerMenu from "../../components/date-picker/index";
import InputMask from "../../components/input-mask/index";
import Budget from "../../components/budget/index";

const MediaPlanContainer = () => {
  const [plan, setPlan] = useState("");
  return (
    <div className="media-plan-container">
      <h3 className="media-plan-heading">Plan : {plan}</h3>
      <div className="media-plan-context">
        <InputMask setPlan={setPlan} />
        <DatePickerMenu />
        <Budget />
      </div>
    </div>
  );
};

export default MediaPlanContainer;
