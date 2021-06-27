import React from "react";

import MediaPlanContainer from "../container/media-plan-container/index";
import SaturationContainer from "../container/saturation-container/index";

interface props {
  selectedTab: string;
}

const MediaPlanPage = ({selectedTab}: props) => {
  return (
    <div className="media-plan">
      {selectedTab === "firstLi" && <MediaPlanContainer />}
      {selectedTab === "secondLi" && <SaturationContainer />}
    </div>
  );
};

export default MediaPlanPage;
