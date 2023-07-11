import "./Products.css";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useLocation } from "react-router-dom";
import axiosInstance from "../../hooks/axios";

const Products = () => {
  let { state } = useLocation();
  const [data, setData] = useState([]);
  console.log(state);
  const [product, setProduct] = useState();

  const firstFetch = () => {
    axiosInstance.get(`/api/v1/store/products/`).then((res) => {
      console.log(res?.data?.results);
      setProduct(res?.data?.results);
    });
  };
  useEffect(() => {
    firstFetch();
  }, []);
  return (
    <Layout>
      <div dir="rtl" className="Choose__container">
        <div className="Choose__items">
          <div className="Choose__titles">
            ترتیب نمایش:
            <div className="Choose__titleI">ارزان ترین </div>
            <div className="Choose__titleI">گران ترین </div>
            <div className="Choose__titleI">جدیدترین </div>
          </div>
          <div className="Choose__Boxes">
            {product?.map((data) => {
              return (
                <Link
                  className="Link"
                  to={`/SingleProduct/${data?.id}`}
                  state={{ id: data.id }}
                >
                  <div className="Choose__Box">
                    <img
                      src={data?.prototype_image}
                      alt={data?.id}
                      className="Choose__Box-pic"
                    />
                    <div className="Choose__Box-title">{data?.name}</div>
                    <div className="Choose__Box-price">
                      {data?.price}
                      <div className="Choose__Box-price-thin">تومان</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="Choose__filter">
          <div className="Choose__title">فیلترها</div>
          <div className="Choose__item">کیف دستی</div>
          <div className="Choose__item">کوله پشتی</div>
          <div className="Choose__available">
            کالاهای موجود
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
