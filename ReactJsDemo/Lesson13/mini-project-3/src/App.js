import React, { Component, useRef } from "react";
import Control from "./components/Control";
import Form from "./components/Form";
import ListTask from "./components/ListTask";
import Title from "./components/Title";
function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      <Form />
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask />
    </div>
  );
}

export default App;
