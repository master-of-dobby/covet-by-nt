import React, { useState } from "react";
// import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Login from "./Login";

const AppLayout = () => {
  const [loggedIn, setLoggedIn] = useState(false);

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

// AppLayout.propTypes = {
//   loggedIn: PropTypes.bool.isRequired,
//   setLoggedIn: PropTypes.func.isRequired,
// };

export default AppLayout;
