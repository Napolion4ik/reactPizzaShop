import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart.html" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
