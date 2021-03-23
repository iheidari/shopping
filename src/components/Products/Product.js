import React from "react";
// import {
//   ProductContainer,
//   Description,
//   Image,
//   TextBody,
//   Title,
//   Price,
// } from "./styled";

const Product = (props) => {
  return (
    <div className="w-3/4 h-56 mx-auto m-4 flex border border-black rounded rounded-lg">
      <div className="flex-none w-48 relative">
        <img
          src={props.image}
          alt={props.name}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <form className="flex-auto p-6 mx-5 my-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-xl font-semibold">{props.name}</h1>
          <div className="text-xl font-semibold text-gray-500">
            ${props.price}
          </div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            In stock
          </div>
        </div>
        <div className="flex space-x-3 mb-4 text-sm font-medium">
          <div className="flex-auto flex space-x-3">
            <button className="w-1/2 flex items-center justify-center rounded-md bg-black text-white">
              Buy now
            </button>
            <button
              className="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
              type="button"
            >
              Add to bag
            </button>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
            type="button"
            aria-label="like"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default Product;
