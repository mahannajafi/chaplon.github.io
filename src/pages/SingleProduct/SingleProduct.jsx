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
      <Popular />
      <UserComments />
    </Layout>
  );
};

export default SingleProduct;
