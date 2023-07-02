import Landing from "./pages/Landing/Landing";
import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Design from "./pages/Design/Design";

function App() {
  return (
    // <Layout>
    //   <Landing />
    // </Layout>

    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/design" element={<Design />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
