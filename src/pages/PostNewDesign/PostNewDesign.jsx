// PostNewDesign

import Layout from "../../components/layout/Layout";
import ShowCase from "../../components/PostDesign/ShowCase";
import DesignInfo from "../../components/PostDesign/DesignInfo";

const PostNewDesign = () => {
  return (
    <Layout>
      <div dir="rtl">
        <ShowCase />
        <DesignInfo />
      </div>
    </Layout>
  );
};

export default PostNewDesign;
