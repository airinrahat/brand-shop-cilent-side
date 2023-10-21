/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Root.css";

export const ThemeContext = createContext(null);

const Root = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Navbar
            onChange={toggleTheme}
            checked={theme === "dark"}
            theme={theme === "light" ? "Light Mode" : "Dark Mode"}
          ></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default Root;
