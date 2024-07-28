// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import FilterBar from "../components/category/FilterBar";
import SortingBar from "../components/category/SortingBar";
import CatCard from "../components/category/CatCard";

const ProductView = ({ allProducts: { items } }) => {
  console.log(items);
  return (
    <div>
      <div className="hero-main-container mt-14">
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <FilterBar />
          </div>
          <div className="col-span-4">
          <div className="hero-main-container ">
            <div
              className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 grid-cols-3 xl:grid-cols-2 sm:grid-cols-1`}
            >
              {items?.map((item, i) => (
                <CatCard key={i} cat />
              ))}
              {items?.map((item, i) => (
                <CatCard key={i} cat />
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ProductView.propTypes = {
  allProducts: PropTypes.object,
  items: PropTypes.array,
};

export default ProductView;
