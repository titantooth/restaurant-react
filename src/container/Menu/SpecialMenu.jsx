import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app-specialmenu flex-center section-padding" id="menu">
    <div className="app-specialmenu-title">
      <SubHeading title="Menu that fits your pallate" />
      <h1 className="headtext-cormorant">Today's Special</h1>
    </div>
    <div className="app-specialmenu-menu">
      <div className="app-specialmenu-menu-wine flex-center">
        <p className="app-specialmenu-menu-heading">Wine & Beer</p>
        <div className="app-specialmenu-menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="app-specialmenu-menu-img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app-specialmenu-menu-cocktails flex-center">
        <p className="app-specialmenu-menu-heading">Wine & Beer</p>
        <div className="app-specialmenu-menu-items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              title={cocktails.title}
              price={cocktails.price}
              tags={cocktails.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom-button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
