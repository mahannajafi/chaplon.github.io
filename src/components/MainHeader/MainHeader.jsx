import "./MainHeader.css";
import Button from "@mui/material/Button";
import {
  faSearch,
  faPenRuler,
  faArrowAltCircleLeft,
  faCartShopping,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="mainHeader__container">
      <div className="mainHeader__right">
        <div className="mainHeader__shop_icon">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        {isLogin ? (
          <>
            <div className="headerUp__design headerUp__design-primary headerUp__user">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="headerUp__design headerUp__design-primary  headerUp__user2">
              <FontAwesomeIcon icon={faBell} />
            </div>
          </>
        ) : (
          <Link className="link" to="/Login">
            <Button
              sx={{
                bgcolor: "var(--main-color)",
                color: "var(--second-color)",
                border: "1px solid var(--second-color)",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "5px 15px",
                borderRadius: "8px",
              }}
              variant="contained"
            >
              ورود | ثبت نام <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </Button>
          </Link>
        )}
        <Button
          sx={{
            bgcolor: "var(--second-color)",
            color: "var(--main-color)",
            border: "1px solid var(--main-color)",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "5px 15px",
            borderRadius: "8px",
            marginLeft: "10px",
            "@media (max-width: 500px)": {
              display: "none",
            },
          }}
          variant="contained"
        >
          طراحی کنید
          <div>
            <FontAwesomeIcon icon={faPenRuler} />
          </div>
        </Button>
      </div>
      <div className="mainHeader__left">
        <div className="mainHeader__search">
          <div className="mainHeader__searchIcon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            dir="rtl"
            placeholder="جست و جو کنید"
            className="mainHeader__input"
          />
        </div>
        <div className="mainHeader__icon"></div>
      </div>
    </div>
  );
};

export default MainHeader;
