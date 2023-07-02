import React from "react";
import "./MainBanner.css";
import Button from "@mui/material/Button";

function MainBanner() {
  return (
    <div className="mainBanner">
      <div className="mainBanner__right">
        <div className="mainBanner__title">دنبال کسب درآمد هستی ؟</div>
        <div className="mainBanner__dec">
            محصول خود را طراحی کنید و اسون به فروش بزار
        </div>
        <div className="mainBanner__buttons">
          <Button
            sx={{
              bgcolor: "var(--main-color)",
              color: "var(--second-color)",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 15px",
              borderRadius: "8px",
            }}
            variant="contained"
          >
            اطلاعات بیشتر
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
