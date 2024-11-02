import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { Coin } from "./components/Coin";
import { Footer } from "./components/Footer";

function App() {
  const [coin_type, setCoin_Type] = useState("usd");
  console.log("from app the coin type is ", coin_type);
  return (
    <div className="App">
      <Header setCoin_Type={setCoin_Type} />
      <Routes>
        <Route path={"/"} element={<Home coin_type={coin_type} />} />
        <Route
          path={"/coin/:coinName"}
          element={<Coin coin_type={coin_type} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
