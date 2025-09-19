import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countiresData = use(countriesPromise);
  const countries = countiresData.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [VisitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedCountry = (country) => {
    setVisitedCountries([...visitedCountries, country]);
  };
  const handleVisitedFlags = (flag) => {
    setVisitedFlags([...VisitedFlags, flag]);
  };
  return (
    <>
      <h2 className="text-3xl">Country</h2>
      <p className="text-gray-400 mt-2">From sources across the web</p>
      <h3 className="text-xl">
        Total country visited: {visitedCountries.length}
      </h3>
      <h3 className="text-xl">Total Visited Flags: {VisitedFlags.length}</h3>
      {VisitedFlags.map((flag, ind) => (
        <img
          key={ind}
          src={flag.svg}
          alt={flag.alt}
          className="w-24 inline-block m-2"
        />
      ))}
      <div className="grid grid-cols-3 gap-8 py-3 ">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
