import React from "react";
import MainCards from "../../components/MainCards/MainCards";
import MainBanner from "../../components/MainBanner/MainBanner";
import Category from "../../components/Category/Category";
import Swiperer from "../../components/Swiperer/Swiperer";
import TitleCat from "../../components/TitleCat/TitleCat";
import Upgrade from "../../components/Upgrade/Upgrade";
import pic from "../../assets/imgs/titlepic.png";
import Layout from "../../components/layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <MainBanner />
      <Category />
      <TitleCat name="محبوب ترین‌ها" pic={pic} />
      <Swiperer />
      <Upgrade />
      <TitleCat name="تازه های پرفروش" pic={pic} />
      <Swiperer />
      <MainCards />
    </Layout>
  );
};

export default Landing;
