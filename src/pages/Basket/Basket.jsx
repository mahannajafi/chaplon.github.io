import BasketContent from "../../components/Basket/BasketContent";
import BasketDetails from "../../components/Basket/BasketDetails";
import Layout from "../../components/layout/Layout";

function Basket() {
  return (
    <Layout>
      <div dir="rtl" className="basketContainer">
        <BasketContent />
        <BasketDetails />
      </div>
    </Layout>
  );
}

export default Basket;
