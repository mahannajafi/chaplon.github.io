import "./Design.css";
import Layout from "../../components/layout/Layout";
import designPic from "../../assets/imgs/design.png";
import { Button } from "@mui/material";
import mask1 from "../../assets/imgs/Mask1.png";
import mask2 from "../../assets/imgs/Mask2.png";
import mask3 from "../../assets/imgs/Mask3.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/axios";

const Design = () => {
  return (
    <Layout>
      <div className="design__container">
        <div className="design__left">
          <img src={designPic} alt="designPic" />
        </div>
        <div className="design__right">
          <div className="design__title">
            فیلم آموزش قرار دادن طرح بر روی محصول خام
          </div>
          <div className="design__dec">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            ومورد استفاده قرار گیرد.
          </div>
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
            ورود به صفحه آموزش
          </Button>
        </div>
      </div>
      <div className="category__container">
        <button className="category__button"> دسته بندی محصولات خام </button>
        <div className="line" />
        <div className="category__cat">
          <Link to="/rowproducts" state={{ id: 3 }} className="category__pic">
            <img src={mask2} alt="2" srcset="" />
          </Link>
          <Link
            to="/rowproducts"
            state={{ id: 2 }}
            className="category__pic category__pic-main"
          >
            <img src={mask1} alt="1" srcset="" />
          </Link>
          <Link to="/rowproducts" state={{ id: 1 }} className="category__pic">
            <img src={mask3} alt="3" srcset="" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Design;
