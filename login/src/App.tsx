import React, { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";
import ReactSwitch from "react-switch";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    setTheme((corr) => (corr === "dark" ? "light" : "dark"));
  };
  return (
    <div className="main" id={theme}>
      <Form></Form>
      <ReactSwitch
        onChange={changeTheme}
        checked={theme === "light"}
      ></ReactSwitch>
    </div>
  );
};

export default App;
