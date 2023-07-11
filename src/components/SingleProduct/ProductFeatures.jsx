import "./ProductFeatures.css";

function ProductFeaturesList(props) {
  const features = props.features;
  const featuresItems = features.map((feature) => (
    <li className="product-features__list__item">{feature}</li>
  ));
  return <ul className="product-features__list">{featuresItems}</ul>;
}

const ProductFeatures = ({ product }) => {
  return (
    <div dir="rtl" className="product-features">
      <h3 className="product-features__title">ویژگی های محصول :</h3>
      <ul className="product-features__list">
        {/* <ProductFeaturesList features={props.features} /> */}
        {product?.props?.map((e) => (
          <li className="product-features__list__item">
            {e?.prop} : {e?.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFeatures;
