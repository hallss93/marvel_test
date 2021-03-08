import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home/index.js";
import Detalhes from "./pages/Detalhes/index.js";
import NaoEncontrado from "./pages/NaoEncontrado";
import Header from "./components/Header/index.js";
import reduxConfig from "./store";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={reduxConfig.store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" exact element={<Detalhes />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
