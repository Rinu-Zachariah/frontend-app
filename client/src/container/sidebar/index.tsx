import React from "react";

interface props {
  selectedTab: string;
  setSelectedTab: Function;
}
const Sidebar = ({ selectedTab, setSelectedTab }: props) => {
  return (
    <nav className="nav-menu active">
      <ul className='nav-menu-items'>
        <li
          className={`${selectedTab === "firstLi" && "nav-menu-items-active"}`}
          onClick={() => setSelectedTab("firstLi")}
        >
          <img src="https://img.icons8.com/material-outlined/24/000000/goal.png" alt="media-plan"/>
          <span>Media Plan</span>
        </li>
        <li
          className={`${selectedTab === "secondLi" && "nav-menu-items-active"}`}
          onClick={() => setSelectedTab("secondLi")}
        >
          <img src="https://img.icons8.com/material-outlined/24/000000/combo-chart.png"  alt="saturation-curve"/>
          <span>Saturation Curve</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;