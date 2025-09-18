import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";
const countriesMessage = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};
function App() {
  const countriesPromise = countriesMessage();
  return (
    <>
      <Suspense fallback="Loading....">
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
