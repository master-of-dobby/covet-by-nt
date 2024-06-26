import React, { useState } from "react";
// import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Login from "./Login";

const AppLayout = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const setIsLoggedIn = (value) => {
    setLoggedIn(value);
  };

  return (
    <>
      {!loggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="app">
          <Header setLoggedIn={setIsLoggedIn} />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default AppLayout;
