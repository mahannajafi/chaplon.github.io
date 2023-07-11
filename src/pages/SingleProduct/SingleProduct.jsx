import "./SingleProduct.css";
import Layout from "../../components/layout/Layout";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/axios";
import SingleProductShowCase from "../../components/SingleProduct/ProductShowCase";
import MainCards from "../../components/MainCards/MainCards";
import DesignerExplanation from "../../components/SingleProduct/DesignerExplanation";
import ProductFeatures from "../../components/SingleProduct/ProductFeatures";
import Popular from "../../components/Popular/Popular";
import UserComments from "../../components/SingleProduct/UserComments";
import TitleCat from "../../components/TitleCat/TitleCat";
import Swiperer from "../../components/Swiperer/Swiperer";
import pic from "../../assets/imgs/titlepic.png";

const SingleProduct = () => {
  let { state } = useLocation();
  console.log(state);

  const { slug } = useParams();
  console.log(slug);
  const [product, setProduct] = useState();

  const firstFetch = () => {
    axiosInstance.get(`/api/v1/store/products/${slug}/`).then((res) => {
      console.log(res?.data);
      setProduct(res?.data);
    });
  };
  useEffect(() => {
    firstFetch();
  }, []);
  return (
    <Layout>
      <SingleProductShowCase product={product} />
      <MainCards />
      <DesignerExplanation product={product} />
      <ProductFeatures product={product} />
      <TitleCat name="تازه های پرفروش" pic={pic} />
      <Swiperer />
      <UserComments />
    </Layout>
  );
};

export default SingleProduct;
