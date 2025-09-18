import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countiresData = use(countriesPromise);
  const countries = countiresData.countries;
  //   console.log(countries);
  return (
    <>
      <h2 className="text-3xl">Country</h2>
      <p className="text-gray-400 mt-2">From sources across the web</p>
      <div className="grid grid-cols-3 gap-8 py-3 ">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
