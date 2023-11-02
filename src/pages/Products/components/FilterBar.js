// Trong file FilterBar.js
import React from "react";
import { useFilter } from "../../../Context/FilterContext";

const FilterBar = ({ setShow }) => {
  const { state, dispatch, products } = useFilter();

  function sortProductsByPriceLowToHigh() {
    dispatch({
      type: "SORT_BY",
      payload: { sortBy: "lowtohigh" },
    });
  }

  return (
    <section className="filter">
      {/* ... */}
      <div className="py-4 overflow-y-auto">
        <ul className="text-slate-700 dark:text-slate-100">
          <li className="mt-1 mb-5">
            <p className="font-semibold my-1">Sort by</p>
            <div className="flex items-center my-1">
              <input
                onChange={sortProductsByPriceLowToHigh}
                checked={state.sortBy === "lowtohigh" || false}
                id="price-sort-1"
                type="radio"
                value="lowtohigh"
                name="price-sort"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />

              <label
                htmlFor="price-sort-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Price - Low to High
              </label>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex items-center my-1">
        <input
          onChange={() =>
            dispatch({
              type: "SORT_BY",
              payload: { sortBy: "hightolow" },
            })
          }
          checked={state.sortBy === "hightolow" || false}
          id="price-sort-2"
          type="radio"
          value="hightolow"
          name="price-sort"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="price-sort-2"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Price - High to Low
        </label>
      </div>
    </section>
  );
};

export default FilterBar;
