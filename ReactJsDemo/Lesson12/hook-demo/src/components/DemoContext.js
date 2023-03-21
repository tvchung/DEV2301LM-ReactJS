import React from "react";
// khởi tạo context để share cho các component con
import { useState, createContext } from "react";
import Content from "./Content";
export const ThemeContext = createContext();

function Example3(props) {
  // useState
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = ()=>{
      setTheme((theme==='light')?'dark':'light');
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div>
          <h2>Devmaster - React Hook - Context, useContext</h2>
          <button onClick={handleChangeTheme}>
              Change theme
          </button>
          <hr/>
          <Content />
      </div>
    </ThemeContext.Provider>
  );
}
export default Example3;
