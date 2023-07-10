import RawProductShowCase from "../../components/SingleRawProduct/RawProductShowCase";
import ProductSellerBox from "../../components/SingleRawProduct/ProductSellerBox";
import { useLocation, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Swiperer from "../../components/Swiperer/Swiperer";
import TitleCat from "../../components/TitleCat/TitleCat";
import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/axios";

const SingleProduct = () => {
  let { state } = useLocation();
  console.log(state);

  const { slug } = useParams();
  console.log(slug);
  const [product, setProduct] = useState();

  const firstFetch = () => {
    axiosInstance.get(`/api/v1/design/blank_product/${slug}/`).then((res) => {
      console.log(res?.data);
      setProduct(res?.data);
    });
  };
  useEffect(() => {
    firstFetch();
  }, []);
  return (
    <Layout>
      <div style={{ marginBottom: "30px" }} dir="rtl">
        {/* <div>{state.id}</div> */}
        <RawProductShowCase product={product} />
        {product?.blank_product_provider_props?.map((e) => (
          <ProductSellerBox product={e} id={product?.id} />
        ))}
        <TitleCat name="محبوب ترین‌ها" dir="rtl" />
        <Swiperer />
      </div>
    </Layout>
  );
};

export default SingleProduct;
