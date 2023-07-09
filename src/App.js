import Landing from "./pages/Landing/Landing";
import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Design from "./pages/Design/Design";
import SingleRawProduct from "./pages/SingleRawProduct/SingleRawProduct";
import PostNewDesign from "./pages/PostNewDesign/PostNewDesign";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import RowProducts from "./pages/RowProducts/RowProducts";

function App() {
  return (
    // <Layout>
    //   <Landing />
    // </Layout>

    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/Learn" element={<Design />} />
        <Route path="/SingleRawProduct" element={<SingleRawProduct />} />
        <Route path="/Design" element={<PostNewDesign />} />
        <Route path="/rowproducts" element={<RowProducts />} />

        <Route path="/dashboard" element={<DashboardLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
