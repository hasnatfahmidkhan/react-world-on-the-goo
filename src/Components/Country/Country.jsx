import React, { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  // console.log();
  const { common } = country.name;
  // console.log(country.area.area);
  const { svg, alt } = country.flags.flags;
  const [countryVisit, SetCountryVisit] = useState(false);
  const handleCountryVisit = () => {
    // 1st - basic system
    // if (countryVisit) {
    //   SetCountryVisit(false);
    // } else {
    //   SetCountryVisit(true);
    // }

    // 2. ternary conditional rendering
    // countryVisit ? SetCountryVisit(false) : SetCountryVisit(true);

    // 3. third system toggle system use ! operator
    SetCountryVisit(!countryVisit);
    handleVisitedCountry(country);
  };
  // console.log(countryVisit);
  return (
    <>
      <div
        className={`border p-4 rounded-xl space-y-2.5 ${
          countryVisit && "visited-country"
        }`}
      >
        <img className="rounded-xl " src={svg} alt={alt} />
        <div className="mt-5 space-y-2">
          <h3 className="text-xl">Country Name: {common}</h3>
          <p className="text-xl ">
            {country.area.area >= 580367
              ? `${common} is Big Country`
              : `${common} is small country`}
          </p>
          <button onClick={handleCountryVisit} className="btn  mt-2">
            {/* {countryVisit ? "Visited" : "Not Visited"} */}
            {countryVisit ? "Visited" : "Not Visited"}
          </button>
          <button
            className={`btn ml-2 `}
            onClick={() => {
              handleVisitedFlags({
                svg: svg,
                alt: alt,
              });
              handleCountryVisit();
            }}
          >
            {countryVisit ? "Added visited" : "Add to visited"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Country;
