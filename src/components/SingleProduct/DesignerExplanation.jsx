import "./DesignerExplanation.css";

const DesignerExplanation = ({ product }) => {
  return (
    <div dir="rtl" className="designer-explanation">
      <h3 className="designer-explanation__title">توضیحات طراح :</h3>
      <p className="designer-explanation__paragraph">{product?.desc}</p>
    </div>
  );
};

export default DesignerExplanation;
