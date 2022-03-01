import React from "react";

const Crystals = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-10">
        <h1 className="mb-5 text-center text-3xl tracking-wide underline decoration-pink-600 sm:mb-6">
          Ajándék kristályok
        </h1>
        <p className="font-roboto text-center text-lg text-gray-700">
          Ajándék kristályok...
        </p>
        <div className="flex flex-col justify-center space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0 mt-10">
          <div className="w-2/6 border-2 rounded-lg">1</div>
          <div className="w-2/6 border-2 rounded-lg">2</div>
        </div>
      </div>
    </div>
  );
};

export default Crystals;
