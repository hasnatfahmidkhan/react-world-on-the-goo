import React from "react";

const Country = ({ country }) => {
  // console.log();
  const { common, official } = country.name;
  // console.log(country.flags);
  const { svg, alt } = country.flags.flags;
  return (
    <>
      <div className="">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold flex items-center gap-3">
            <img className="w-16 h-10" src={svg} alt={alt} />
            <h3 className="text-xl">{common}</h3>
          </div>
          <div className="collapse-content text-sm ">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>

        {/* <div className="flex items-center  gap-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-black hover:rounded-lg pl-1 py-5">
         
          
        </div> */}
      </div>
    </>
  );
};

export default Country;
