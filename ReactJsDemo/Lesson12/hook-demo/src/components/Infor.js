import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./DemoContext";
export default function Infor() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h3 className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, non
        placeat reiciendis veritatis quia debitis. Dolorum architecto illo,
        soluta beatae ducimus enim blanditiis! Quibusdam, quis voluptatum
        assumenda quisquam ullam repellendus?
      </h3>
    </div>
  );
}
