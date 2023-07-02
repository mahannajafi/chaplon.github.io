import React from "react";
import "./MiniNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MiniNavbar() {
  return (
    <>
      <div className="miniNavbar">
        <div className="miniNavbar__item">مقالات</div>
        <div className="miniNavbar__item">درباره ما</div>
        <div className="miniNavbar__item">
          فروشگاه
          <FontAwesomeIcon icon={faShop} />
        </div>
      </div>
      <img
        src="https://www.figma.com/file/4sHMvQGfjBXY5WdsDi58Ad/UI%2FUX?node-id=436%3A1003&t=PLpCNzUfuYp3YmRI-4"
        alt=""
        srcset=""
      />
    </>
  );
}

export default MiniNavbar;
