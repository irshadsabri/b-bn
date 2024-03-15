// import React from "react";
// import { Navbar } from "../components/Navbar";

// export const Home = () => {
//   return <>
//   </>;
// };
// Home.js
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/other">Go to Other Page</Link>
    </>
  );
};
