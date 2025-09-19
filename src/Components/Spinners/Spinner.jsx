import React from "react";

const Spinner = () => {
  return (
    <div className="w-full flex justify-center items-center h-[50vh]">
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
};

export default Spinner;
