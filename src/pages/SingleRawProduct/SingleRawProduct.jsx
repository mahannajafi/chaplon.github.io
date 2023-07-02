import RawProductShowCase from "../../components/SingleRawProduct/RawProductShowCase";
import ProductSellerBox from "../../components/SingleRawProduct/ProductSellerBox";
import { useLocation } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Swiperer from "../../components/Swiperer/Swiperer";
import TitleCat from "../../components/TitleCat/TitleCat";

const SingleProduct = () => {
  let { state } = useLocation();

  return (
    <Layout>
      <div style={{ marginBottom: "30px" }} dir="rtl">
        {/* <div>{state.id}</div> */}
        <RawProductShowCase />
        <ProductSellerBox />
        <ProductSellerBox />
        <ProductSellerBox />
        <ProductSellerBox />
        {/* <Popular /> */}
        <TitleCat name="محبوب ترین‌ها" dir="rtl" />
        <Swiperer />
      </div>
    </Layout>
  );
};

export default SingleProduct;
