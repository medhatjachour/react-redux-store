// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar, Footer, Cart } from "./components";
import { footerAPI , allProducts} from "./data/data";
import { Home, ProductView } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="Products/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <ProductView allProducts = {allProducts}/>
            </React.Suspense>
          }
        />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
