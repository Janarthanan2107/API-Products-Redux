import React, { useState, useEffect } from "react";
import { SiRedux } from "react-icons/si";

// getting the values from redux file using use selectors
import { useDispatch, useSelector } from "react-redux";

// import file which the functions are contains
import { clearData } from "./features/product/productSlice";

const App = () => {
  // using use selector we can get the value from redux file
  const { productItems } = useSelector((state) => state.product);
  console.log(productItems);

  // import the functions from the redux file
  const dispatch = useDispatch();

  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredProducts = productItems.filter((item) =>
  //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="flex justify-between items-center mt-3">
          <div className="mx-auto lg:mx-0 w-[75%]">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span>Products display using redux.</span>
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              "Get Started with Our Innovative App Today!"
            </p>
            <SiRedux className="text-violet-600 text-4xl mt-2" />
          </div>
          <div className="mx-auto flex gap-3 justify-end">
            {/* <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-[300px] p-2 border border-gray-300 rounded"
            /> */}
            <button
              className="py-2 px-3 rounded-lg bg-violet-600 text-white font-medium"
              onClick={() => dispatch(clearData())}
            >
              Clear Data
            </button>
          </div>
        </span>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <>
            {productItems.map((item) => {
              const { id, title, price, description, category, image, rating } =
                item;
              return (
                <article
                  className="flex max-w-xl flex-col items-start justify-between"
                  key={id}
                >
                  <div className="w-full min-h-[250px] flex justify-center items-center py-3 rounded-2xl shadow-lg cursor-pointer">
                    <img
                      src={image}
                      alt={title}
                      className="w-[35%] h-auto object-cover"
                    />
                  </div>
                  <div className="mt-5 text-xs">
                    <p className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 shadow cursor-pointer">
                      {category}
                    </p>
                  </div>
                  <div className="group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">{title}</a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {description}
                    </p>
                  </div>
                  <div className="w-full mt-8 flex justify-between items-center gap-x-4 border-b border-gray-300 pb-3 lg:border-b-0 lg:pb-0">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">${price}</p>
                    </div>
                    <div className="text-sm leading-6 flex items-center">
                      <p className="text-xs">In stock : </p>
                      <p className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                        {rating.count}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default App;
